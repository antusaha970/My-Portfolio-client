import { Container } from "@mui/material";
import {
  Header,
  TechStack,
  Project,
  Footer,
  ProblemSolvingProfile,
} from "../../Index/Index";
import Education from "../Education/Education";
const Home = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <TechStack />
      <Education />
      <ProblemSolvingProfile />
      <Project />
      <Footer />
    </Container>
  );
};

export default Home;
