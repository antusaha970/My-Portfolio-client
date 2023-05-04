import { Box, Button, Container, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { CssTextField } from "../AdminLogin/AdminLogin";
import client from "../../../API/API";
import { useState } from "react";

const AddProject = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      techStack: "",
      liveLink: "",
      githubLink: "",
    },
  });
  const [image, setImage] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };
  console.log(image);
  const onSubmit = async (data) => {
    // try {
    //   const response = await client.put("/add/project", data);
    //   console.log(response.data);
    //   if (response.data) {
    //     alert("Project added successfully");
    //     reset();
    //   }
    // } catch (error) {
    //   alert("There was an error");
    //   console.log(error);
    // }
    const imgArr = image.split(",");
    const apiKey = "bccff53654f10f82c9c8a2ba645ab87a";
    const imageBase64 = `${imgArr[1]}`;

    const formData = new FormData();
    formData.append("image", imageBase64);

    fetch(`https://api.imgbb.com/1/upload?&key=${apiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Do something with the response data
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
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
          <br />
          <input type="file" onChange={handleFileInputChange} />
          <Button variant="contained" type="submit" color="secondary">
            Submit
          </Button>
        </Box>
        {image && <img src={image} alt="uploaded" />}
      </Container>
    </Box>
  );
};

export default AddProject;
