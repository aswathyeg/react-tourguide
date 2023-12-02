import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Location from "./components/Location";
import Destinations from "./components/Destinations";
import NewNavbar from "./components/NewNavbar";
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      {/* <NewNavbar /> */}
      {/* <Navbar /> */}
      <Home />
      <Destinations />
      <Activities />
      <Footer/>
      {/* <Route path="/location" element={<Location />} />
          <Route path="/books" element={<Books />} /> */}
    </div>
  );
}

export default App;
