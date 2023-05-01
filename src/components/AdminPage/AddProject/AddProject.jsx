import { Box, Button, Container, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { CssTextField } from "../AdminLogin/AdminLogin";
import client from "../../../API/API";

const AddProject = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      techStack: "",
      liveLink: "",
      githubLink: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await client.put("/add/project", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        minHeight: "90vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            my: 1,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Add Project
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <CssTextField
                {...field}
                id="projectTitle"
                label="Enter Project Title"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                type="text"
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <CssTextField
                {...field}
                id="projectDes"
                label="Enter Project Description"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                type="text"
              />
            )}
          />
          <Controller
            name="techStack"
            control={control}
            render={({ field }) => (
              <CssTextField
                {...field}
                id="techStack"
                label="Enter Project TechStack"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                type="text"
              />
            )}
          />
          <Controller
            name="liveLink"
            control={control}
            render={({ field }) => (
              <CssTextField
                {...field}
                id="liveLink"
                label="Enter Project Live Link"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                type="text"
              />
            )}
          />
          <Controller
            name="githubLink"
            control={control}
            render={({ field }) => (
              <CssTextField
                {...field}
                id="githubLink"
                label="Enter Project Github link"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                type="text"
              />
            )}
          />
          <Button variant="contained" type="submit" color="secondary">
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AddProject;
