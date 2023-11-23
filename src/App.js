import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Location from "./components/Location";
import Destinations from "./components/Destinations";
import NewNavbar from "./components/NewNavbar";
function App() {
  return (
    <div>
      <Home />
      <Destinations />
      {/* <Route path="/location" element={<Location />} />
          <Route path="/books" element={<Books />} /> */}
    </div>
  );
}

export default App;
