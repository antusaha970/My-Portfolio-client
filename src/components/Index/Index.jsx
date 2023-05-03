import { lazy } from "react";

const AdminLogin = lazy(() => import("../AdminPage/AdminLogin/AdminLogin"));
const AdminMenu = lazy(() => import("../AdminPage/AdminMenu/AdminMenu"));
const AddProject = lazy(() => import("../AdminPage/AddProject/AddProject"));

export { default as NavBar } from "../shared/NavBar/NavBar";
export { default as Home } from "../HomePage/Home/Home";
export { default as Header } from "../HomePage/Header/Header";
export { default as TechStack } from "../HomePage/TechStack/TechStack";
export { default as Project } from "../HomePage/Project/Project";
export { default as Loader } from "../Loader/Loader";
export { default as PrivateRoute } from "../shared/PrivateRoute/PrivateRoute";
export { default as Footer } from "../shared/Footer/Footer";
export { default as Contact } from "../ContactPage/Contact/Contact";
export { default as AfterMessageModal } from "../ContactPage/AfterMessageModal/AfterMessageModal";
export { AdminLogin, AdminMenu, AddProject };
