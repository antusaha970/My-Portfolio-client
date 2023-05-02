import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import { Fire } from "fluent-emoji";
import { useEffect, useState } from "react";
import client from "../../../API/API";
import SingleProjectCard from "../SingleProjectCard/SingleProjectCard";

const ProjectTitle = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  display: flex;
  align-items: center;
  color: #cccccc;
  justify-content: center;
`;

const ProjectSubTitle = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: #a7a7a7;
`;

const Project = () => {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.get("/resources/projects");
        setProjectsData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "600px",
      }}
    >
      <Box>
        <ProjectTitle>
          Pr
          <Fire width="48px" height="48px" />
          jects
        </ProjectTitle>
        <ProjectSubTitle>Things I have built so far</ProjectSubTitle>
        <Box>
          <Stack
            direction={{ md: "row", xs: "column" }}
            sx={{
              my: 2,
            }}
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            {projectsData?.map((project) => (
              <SingleProjectCard key={project._id} project={project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
