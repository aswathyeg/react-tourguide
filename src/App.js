import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Location from "./components/Location";
import Destinations from "./components/Destinations";
function App() {
  return (
    <div>
      <Home />
      {/* <Route path="/location" element={<Location />} />
          <Route path="/books" element={<Books />} /> */}
      <Destinations />
    </div>
  );
}

export default App;
