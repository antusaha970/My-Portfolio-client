import Slider from "react-slick";
import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./problemSolving.css";
import { problemSolvingProfileData } from "../../data/data";
const ProblemSolvingTitle = styled(Typography)`
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

const ProblemSolvingSubTitle = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: #a7a7a7;
`;

const ProblemSolvingProfile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <ProblemSolvingTitle>My problem solving profile</ProblemSolvingTitle>
      <ProblemSolvingSubTitle>
        Solved more then 400+ problems in various problem solving platforms
      </ProblemSolvingSubTitle>
      <Container>
        <div className="slider-container">
          <Slider {...settings}>
            {problemSolvingProfileData.map((problem) => (
              <div key={problem.name}>
                <img
                  src={problem.img}
                  alt="problem solving profile"
                  className="imgPb"
                />
                <Box
                  component="div"
                  sx={{
                    textAlign: "center",
                    my: 2,
                  }}
                >
                  <a href={problem.profileLink} target=" ">
                    <Button variant="contained" color="success">
                      View Profile
                    </Button>
                  </a>
                </Box>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolvingProfile;
