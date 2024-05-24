import { Container } from "@mui/material";
import {
  Header,
  TechStack,
  Project,
  Footer,
  ProblemSolvingProfile,
} from "../../Index/Index";
const Home = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <TechStack />
      <ProblemSolvingProfile />
      <Project />
      <Footer />
    </Container>
  );
};

export default Home;
