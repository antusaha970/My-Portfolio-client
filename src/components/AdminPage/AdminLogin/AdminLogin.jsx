import styled from "@emotion/styled";
import { Box, Button, Container, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "green",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
});

const AdminLogin = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Box
      sx={{
        minHeight: "90vh",
      }}
    >
      <Container maxWidth="lg">
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CssTextField
                {...field}
                id="emailInp"
                label="Enter Your Email"
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
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <CssTextField
                {...field}
                id="passInp"
                label="Enter Your Password"
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
                type="password"
              />
            )}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLogin;
