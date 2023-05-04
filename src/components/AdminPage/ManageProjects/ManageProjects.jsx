import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import client from "../../../API/API";

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.get("/resources/projects");
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await client.delete("/resources/delete?id=" + id);
      if (response.data) {
        alert("Project deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects?.map((project) => (
                <TableRow
                  key={project._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {project.title}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => handleDelete(project._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default ManageProjects;
