import React, { useState } from "react";
import "./Home.css";
import imageSlide from "./data";
import "react-awesome-slider/dist/styles.css";
import photo1 from "./assets/photo1.avif";
const Home = () => {
  const [currentState, setCurrentState] = useState(0);
  return <div className="container-style">Home</div>;
};

export default Home;
