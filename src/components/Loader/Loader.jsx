import { Box } from "@mui/material";
import "./Loader.css";
const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loader"></div>
    </Box>
  );
};

export default Loader;
