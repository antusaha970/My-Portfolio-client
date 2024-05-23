import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import "./TechStack.css";
import techStackData from "../../../data/data";
export const TechStackTitle = styled(Typography)`
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
        My Skills
      </TechStackTitle>
      <TechStackSubTitle variant="p" component="p">
        I&apos;ve gained experience working with these technologies recently
      </TechStackSubTitle>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" py={3}>
        {techStackData.map((tech) => (
          <Box
            key={tech.name}
            sx={{
              m: 2,
              width: { sm: "150px", xs: "100px" },
              height: { sm: "150px", xs: "100px" },
            }}
          >
            <img src={tech.img} alt={tech.name} className={`tech-img`} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default TechStack;
