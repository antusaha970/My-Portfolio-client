import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Fire } from "fluent-emoji";

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
      </Box>
    </Box>
  );
};

export default Project;
