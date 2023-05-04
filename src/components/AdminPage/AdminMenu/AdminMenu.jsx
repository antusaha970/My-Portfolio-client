import styled from "@emotion/styled";
import { Box, Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const CustomButton = styled(Button)`
  && {
    & > a {
      color: #fff;
    }
  }
`;

const AdminMenu = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          sx={{
            minHeight: "80vh",
            minWidth: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomButton color="secondary" variant="contained">
            <Link to="/admin/add_project">Add Project</Link>
          </CustomButton>
          <br />
          <CustomButton color="secondary" variant="contained">
            <Link to="/admin/manage_project">Manage Project</Link>
          </CustomButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default AdminMenu;
