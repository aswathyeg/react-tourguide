import React from "react";

const Card = (props) => {
  return (
    <div
      data-aos={props.aos}
      data-aos-offset={props.aos_offset}
      className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
    >
      <div class="card p0 overflow-hidden h-100 shadow">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
