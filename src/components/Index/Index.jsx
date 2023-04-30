import { lazy } from "react";

const AdminLogin = lazy(() => import("../AdminPage/AdminLogin/AdminLogin"));

export { default as NavBar } from "../shared/NavBar/NavBar";
export { default as Home } from "../HomePage/Home/Home";
export { default as Header } from "../HomePage/Header/Header";
export { default as TechStack } from "../HomePage/TechStack/TechStack";
export { default as Project } from "../HomePage/Project/Project";
export { default as Loader } from "../Loader/Loader";
export { AdminLogin };
