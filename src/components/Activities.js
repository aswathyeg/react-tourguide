import React from "react";
import "./Activities.css";
import photo1 from "./assets/photo1.avif";

import { Container } from "react-bootstrap";

const Activities = (props) => {
  return (
    <div>
      <section className="py-6 py-lg-4 container">
        <h1
          className="text-center mt3"
          style={{ fontFamily: "Kanit ", fontSize: 28 }}
        >
          Popular Activities
        </h1>
      </section>
      <Container className="subComponentsContainer">
        {props.text ? <h4 className="titleCard">Writings</h4> : null}
        <br></br>
        <body>
          <div class="box">
            <div
              class="animatedCard"
              //   onClick={() =>
              //     window.open(
              //       "https://aswathyeg.medium.com/using-chart-js-in-react-239d0c7f055c"
              //     )
              //   }
            >
              <div class="imgBx">
                <img src={photo1} alt="images" />
              </div>
              <div class="details">
                <h2>
                  An overview of data visualisation using Chart.js in React
                </h2>
              </div>
            </div>

            <div
              class="animatedCard"
              //   onClick={() =>
              //     window.open(
              //       "https://aswathyeg.medium.com/state-management-in-react-f96c42992b7"
              //     )
              //   }
            >
              <div class="imgBx">
                <img src={photo1} alt="images" />
              </div>
              <div class="details">
                <h2>
                  An introduction to state management
                  {/* <span>Producer</span> */}
                </h2>
              </div>
            </div>

            <div
              class="animatedCard"
              //   onClick={() =>
              //     window.open(
              //       "https://aswathyeg.medium.com/understanding-usereducer-hook-in-react-ab81a9055619"
              //     )
              //   }
            >
              {/* <div class="imgBx">
                <img src={useReducer} alt="images" />
              </div>
              <div class="details">
                <h2>A brief overview of useReducer hook in React</h2>
              </div> */}
            </div>
            {/* <div className="navtop" /> */}
            <div
              class="animatedCard subComponentsContainer"
              //   onClick={() =>
              //     window.open(
              //       "https://aswathyeg.medium.com/overview-of-react-routing-a5ce0f1c33ba"
              //     )
              //   }
            >
              <div class="imgBx">
                <img src={photo1} alt="images" />
              </div>
              <div class="details">
                <h2>A quick overview of Routing in React</h2>
              </div>
            </div>
            <div
              class="animatedCard subComponentsContainer"
              //   onClick={() =>
              //     window.open(
              //       "https://aswathyeg.medium.com/introduction-to-cypress-part-1-8950db7ec711"
              //     )
              //   }
            >
              <div class="imgBx">
                <img src={photo1} alt="images" />
              </div>
              <div class="details">
                <h2>A brief introduction to Cypress</h2>
              </div>
            </div>
            <div
              class="animatedCard subComponentsContainer"
              //   onClick={() =>
              //     window.open(
              //       "https://aswathyeg.medium.com/cypress-installation-and-execution-875e173f3167"
              //     )
              //   }
            >
              <div class="imgBx">
                <img src={photo1} alt="images" />
              </div>
              <div class="details">
                <h2>An introduction on how to install and execute Cypress</h2>
              </div>
            </div>
          </div>
        </body>
      </Container>
    </div>
  );
};

export default Activities;
