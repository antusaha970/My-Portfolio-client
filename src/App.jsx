import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { NavBar, Home, Loader } from "./components/Index/Index";
import { useEffect, useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadTime = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadTime);
    };
  }, []);
  return (
    <Box sx={{ background: "#191919" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </Box>
  );
}

export default App;
