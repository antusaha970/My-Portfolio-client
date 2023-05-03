import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  NavBar,
  Home,
  Loader,
  AdminLogin,
  PrivateRoute,
  AdminMenu,
  AddProject,
  Contact,
} from "./components/Index/Index";
import { Suspense, useEffect, useState } from "react";
import { ResumeModalContext, AdminLoginContext } from "./Contexts/AllContexts";
function App() {
  const [isLoading, setIsLoading] = useState(true); // Preloader State
  const [modalIsOpen, setIsOpen] = useState(false); // Modal State
  const [isAdmin, setIsAdmin] = useState(false); // admin State
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
          <AdminLoginContext.Provider value={[isAdmin, setIsAdmin]}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route
                path="/admin/menu"
                element={
                  <PrivateRoute isSignedIn={isAdmin}>
                    <Suspense>
                      <AdminMenu />
                    </Suspense>
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/add_project"
                element={
                  <PrivateRoute isSignedIn={isAdmin}>
                    <Suspense>
                      <AddProject />
                    </Suspense>
                  </PrivateRoute>
                }
              />
            </Routes>
          </AdminLoginContext.Provider>
        </ResumeModalContext.Provider>
      )}
    </Box>
  );
}

export default App;
