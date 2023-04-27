import styled from "@emotion/styled";
import { GitHub, LinkedIn, MenuOpen } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const LogoText = styled(Typography)`
  background: linear-gradient(to right, #ff00cc, #333399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 30px;
`;

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <Link to="/about" className="nav-link">
              About
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
        <Box display={{ lg: "none", md: "none", sm: "block", xs: "block" }}>
          <IconButton
            size="large"
            aria-label="open website menubar"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuOpen
              sx={{
                color: "#fff",
                fontSize: "40px",
              }}
            />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Stack
              direction="column"
              justifyContent="center"
              gap={2}
              pl={1}
              color="#000"
            >
              <Link to="" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
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
          </Menu>
        </Box>
      </Stack>
    </Container>
  );
};

export default NavBar;
