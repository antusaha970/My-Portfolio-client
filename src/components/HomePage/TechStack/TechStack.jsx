import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import "./TechStack.css";
const TechStackTitle = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  color: #cccccc;
`;

const TechStackSubTitle = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 26px;
  text-align: center;
  color: #a7a7a7;
  padding-top: 30px;
`;

const TechStack = () => {
  return (
    <Box
      sx={{
        minHeight: "500px",
      }}
    >
      <TechStackTitle
        variant="h4"
        component="h2"
        sx={{
          lineHeight: { md: "36px", xs: "48px" },
        }}
      >
        My Tech Stack
      </TechStackTitle>
      <TechStackSubTitle variant="p" component="p">
        I&apos;ve gained experience working with these technologies recently
      </TechStackSubTitle>
    </Box>
  );
};

export default TechStack;
