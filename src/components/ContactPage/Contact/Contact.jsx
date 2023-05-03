import { Box, Button, Container, Typography } from "@mui/material";
import { Footer } from "../../Index/Index";
import { TechStackTitle } from "../../HomePage/TechStack/TechStack";
import { useForm, Controller } from "react-hook-form";
import { CssTextField } from "../../AdminPage/AdminLogin/AdminLogin";
import client from "../../../API/API";
import { useState } from "react";
import styled from "@emotion/styled";

const CustomMsgLog = styled(Box)`
  width: 100%;
  height: 100px;
  background: #525659;
  position: absolute;
  top: 0;
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contact = () => {
  const [isReceivedMsg, setIsReceivedMsg] = useState(false);
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
        setIsReceivedMsg(true);
        setTimeout(() => {
          setIsReceivedMsg(false);
        }, 2500);
      }
    } catch (error) {
      alert("Failed to send message please try again later");
      console.log(error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "80vh",
          position: "relative",
        }}
      >
        {isReceivedMsg && (
          <CustomMsgLog>
            <Typography
              variant="p"
              component="p"
              sx={{
                color: "#fff",
                textAlign: "center",
              }}
            >
              Thank You I will Get back to you soon ❤️
            </Typography>
          </CustomMsgLog>
        )}
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
                sx={{
                  zIndex: 1,
                }}
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
                sx={{
                  zIndex: 1,
                }}
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
