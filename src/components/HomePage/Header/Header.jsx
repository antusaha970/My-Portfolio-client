import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import { HeartWithArrow, SmilingFaceWithSunglasses } from "fluent-emoji";
import "./Header.css";

const NameHighlight = styled("span")`
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ani1 infinite ease;
  transition: 1s;
  animation-duration: 2s;

  @keyframes ani1 {
    0% {
      background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    25% {
      background: linear-gradient(180deg, #e70faa -2.06%, #13b0f5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    50% {
      background: linear-gradient(280deg, #13b0f5 -2.06%, #e70faa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    75% {
      background: linear-gradient(360deg, #13b0f5 -2.06%, #e70faa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    100% {
      background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;

const Header = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
      }}
    >
      <Stack
        direction={{ lg: "row", md: "row", xs: "column-reverse" }}
        justifyContent="space-between"
        alignItems="center"
        py={{ sm: "70px", xs: "30px" }}
      >
        <Box flex={1}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: { sm: "50px", xs: "40px" },
              lineHeight: "60px",
              letterSpacing: "-1px",
              color: "#D9D9D9",
              width: { md: "75%", xs: "100%" },
            }}
          >
            Hi <HeartWithArrow className="emoji-smile" />, My name is{" "}
            <NameHighlight>Antu Saha</NameHighlight> . An Enthusiastic Web
            Developer
          </Typography>
        </Box>
        <Box flex={1} mb={{ xs: 1 }}>
          <SmilingFaceWithSunglasses className="emoji-header" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
