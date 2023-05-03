import { Box, Button, Container, Typography } from "@mui/material";
import { Footer } from "../../Index/Index";
import { TechStackTitle } from "../../HomePage/TechStack/TechStack";
import { useForm, Controller } from "react-hook-form";
import { CssTextField } from "../../AdminPage/AdminLogin/AdminLogin";
import client from "../../../API/API";

const Contact = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      const response = await client.post("/contact/message", data);
      if (response.data) {
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "80vh",
        }}
      >
        <Box>
          <TechStackTitle variant="h2" component="h2" py={1}>
            Get in touch with me
          </TechStackTitle>
        </Box>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} pt={2}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true, pattern: /\S+@\S+\.\S+/ }}
            render={({ field }) => (
              <CssTextField
                {...field}
                id="projectTitle"
                label="Enter Your email Address"
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
          {errors.email && (
            <Typography
              component="small"
              variant="small"
              sx={{
                color: "red",
                py: 2,
              }}
            >
              Please enter an valid email{" "}
            </Typography>
          )}
          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CssTextField
                {...field}
                id="projectTitle"
                label="Enter Your Message"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                rows={2}
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
          <Button type="submit" variant="contained" color="secondary">
            Submit
          </Button>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

export default Contact;
