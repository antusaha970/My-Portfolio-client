import styled from "@emotion/styled";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";

const LogoText = styled(Typography)`
  background: linear-gradient(to right, #ff00cc, #333399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 30px;
`;

const NavBar = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        sx={{
          py: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <LogoText component="p" variant="p">
            {"{ 404 }"}
          </LogoText>
        </Box>
        <Box display={{ lg: "block", md: "block", sm: "none", xs: "none" }}>
          <Stack direction="row">
            <Link to="" className="nav-link">
              Home
            </Link>
            <Link to="" className="nav-link">
              About
            </Link>
            <Link to="" className="nav-link">
              Tech Stack
            </Link>
            <Link to="" className="nav-link">
              Projects
            </Link>
            <Link to="" className="nav-link">
              Contact
            </Link>
            <Link to="" className="nav-link">
              <GitHub />
            </Link>
            <Link to="" className="nav-link">
              <LinkedIn />
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default NavBar;
