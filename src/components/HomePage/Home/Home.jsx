import { Container } from "@mui/material";
import { Header, TechStack, Project, Footer } from "../../Index/Index";
const Home = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <TechStack />
      <Project />
      <Footer />
    </Container>
  );
};

export default Home;
