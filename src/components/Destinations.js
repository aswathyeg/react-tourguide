import React, { useEffect } from "react";
import Aos from "aos";
import photo1 from "./assets/photo1.avif";
import photo3 from "./assets/photo3.avif";
import photo2 from "./assets/photo2.avif";
import photo8 from "./assets/photo8.jpg";
import photo4 from "./assets/photo4.avif";
import photo5 from "./assets/photo5.avif";
import photo6 from "./assets/photo6.avif";
import photo7 from "./assets/photo7.jpg";
import NewNavbar from "./NewNavbar";
import "aos/dist/aos.css";

import Card from "./Card";

const Destinations = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <section className="py-6 py-lg-4 container">
        <h1
          className="text-center mt3"
          style={{ fontFamily: "Kanit ", fontSize: 28 }}
        >
          Main Destinations
        </h1>
      </section>
      <section className="py-3 py-lg-2 container">
        <div className="row">
          <Card
            aos="fade-left"
            aos_offset="100"
            img={photo1}
            title="title"
            desc="desc"
          />
          <Card
            aos="fade-left"
            aos_offset="100"
            img={photo8}
            title="title"
            desc="desc"
          />
          <Card
            aos="fade-left"
            aos_offset="100"
            img={photo3}
            title="title"
            desc="desc"
          />
          <Card
            aos="fade-left"
            aos_offset="100"
            img={photo4}
            title="title"
            desc="desc"
          />
          <Card
            aos="fade-left"
            aos_offset="100"
            img={photo5}
            title="title"
            desc="desc"
          />
          <Card
            aos="fade-left"
            aos_offset="100"
            img={photo6}
            title="title"
            desc="desc"
          />
          <Card
            aos="fade-left"
            aos_offset="100"
            img={photo4}
            title="title"
            desc="desc"
          />
          <Card
            aos="fade-left"
            aos_offset="100"
            img={photo7}
            title="title"
            desc="desc"
          />
        </div>
      </section>
    </div>
  );
};

export default Destinations;
