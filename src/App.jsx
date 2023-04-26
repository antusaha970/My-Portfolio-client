import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { NavBar, Home } from "./components/Index/Index";
function App() {
  return (
    <Box sx={{ background: "#191919" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
