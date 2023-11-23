import React, { useState } from "react";
import "./Home.css";
import imageSlide from "./data";
import photo1 from "./assets/photo1.avif";
import NewNavbar from "./NewNavbar";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./Books";
import Location from "./Location";
import { Card } from "react-bootstrap";
import Destinations from "./Destinations";

const Home = () => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    // width: "100 vw",
  };
  return (
    <div className="container-style">
      <div style={bgImageStyle}>
        <NewNavbar />{" "}
        <BrowserRouter>
          {/* <NewNavbar /> */}
          <Routes>
            <Route path="/location" element={<Location />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Home;
