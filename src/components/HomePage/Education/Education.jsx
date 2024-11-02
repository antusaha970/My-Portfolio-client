import { Box, Stack } from "@mui/material";
import educationImg from "../../../assets/pbProfile/education.png";
import { TechStackSubTitle, TechStackTitle } from "../TechStack/TechStack";
import "./education.css";
const Education = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
      }}
    >
      <Box flex={1}>
        <TechStackTitle
          variant="h4"
          component="h2"
          sx={{
            lineHeight: { md: "36px", xs: "48px" },
          }}
        >
          My Education
        </TechStackTitle>
        <TechStackSubTitle variant="p" component="p">
          My academic education details
        </TechStackSubTitle>
      </Box>
      <Stack
        direction={{ lg: "row", md: "row", xs: "column-reverse" }}
        justifyContent="space-between"
        alignItems="center"
        py={{ sm: "70px", xs: "30px" }}
      >
        <Box
          flex={1}
          mb={{ xs: 1 }}
          sx={{
            textAlign: "center",
          }}
        >
          <img src={educationImg} alt="education" className="banner-photo" />
        </Box>
        <Box
          flex={1}
          mb={{ xs: 1 }}
          sx={{
            textAlign: "center",
          }}
        >
          <h2 className="education_title">Diploma in Computer Technology</h2>
          <h4 className="education_subtitle">
            Institute of Computer Science And Technology,Feni
          </h4>
          <p className="education_subtitle">2020-2024</p>
        </Box>
      </Stack>
    </Box>
  );
};

export default Education;
