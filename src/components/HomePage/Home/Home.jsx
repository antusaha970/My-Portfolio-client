import { Container } from "@mui/material";
import { Header, TechStack, Project } from "../../Index/Index";
const Home = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <TechStack />
      <Project />
    </Container>
  );
};

export default Home;
