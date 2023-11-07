import "./App.css";
import NewNavbar from "./components/NewNavbar";
import Home from "./components/Home";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Location from "./components/Location";
function App() {
  return (
    <Container>
      <NewNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </Container>
  );
}

export default App;
