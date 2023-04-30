import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { NavBar, Home, Loader, AdminLogin } from "./components/Index/Index";
import { useEffect, useState } from "react";
import { ResumeModalContext } from "./Contexts/AllContexts";
function App() {
  const [isLoading, setIsLoading] = useState(true); // Preloader State
  const [modalIsOpen, setIsOpen] = useState(false); // Modal State
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
        <ResumeModalContext.Provider value={[modalIsOpen, setIsOpen]}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminLogin />} />
          </Routes>
        </ResumeModalContext.Provider>
      )}
    </Box>
  );
}

export default App;
