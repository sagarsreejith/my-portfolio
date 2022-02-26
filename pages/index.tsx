import Container from '@mui/material/Container';
import  Navigation  from "../src/components/common/navigation";

const DEMO = 'JJJ';

const Homepage = () => {
  return (
    <Container maxWidth="lg">
      <Navigation />
      <h1>Home Page</h1>
      <p>lorem*15</p>
    </Container>
  );
};

export default Homepage;