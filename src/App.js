import "./App.css";
import NewNavbar from "./components/NewNavbar";
import Home from "./components/Home";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <NewNavbar />
      <Home />
    </Container>
  );
}

export default App;
