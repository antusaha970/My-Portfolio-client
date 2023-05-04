import styled from "@emotion/styled";
import { GitHub, Link } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const ProjectTitle = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  color: #cccccc;
  padding-bottom: 10px;
`;
const ProjectDescription = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #cccccc;
  padding-bottom: 10px;
`;
const ProjectTechStack = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #cccccc;
  padding-bottom: 10px;
`;
const ProjectLink = styled("a")`
  font-family: "Poppins";
  color: #ffffff;
  text-decoration: underline;
`;

const SingleProjectCard = ({ project }) => {
  const { title, description, techStack, liveLink, githubLink, imageLink } =
    project;
  return (
    <Card
      sx={{
        background: "#363636",
        width: "320px",
        height: "auto",
        minHeight: "400px",
      }}
    >
      <CardMedia component="img" height="194" image={imageLink} alt={title} />
      <CardContent>
        <ProjectTitle variant="h6" component="h6">
          {title}
        </ProjectTitle>
        <ProjectDescription variant="p" component="p">
          {description}
        </ProjectDescription>
        <ProjectTechStack variant="p" component="p">
          Tech-Stack :{" "}
          <span
            style={{
              color: "#b1b1b1",
            }}
          >
            {techStack}
          </span>
        </ProjectTechStack>
        <Stack direction="row" justifyContent="space-between">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link sx={{ color: "#fff", pr: 1 }} />
            <ProjectLink href={`${liveLink}`} target=" ">
              Live Preview
            </ProjectLink>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <GitHub sx={{ color: "#fff", pr: 1 }} />
            <ProjectLink href={`${githubLink}`} target=" ">
              View Github
            </ProjectLink>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

SingleProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleProjectCard;
