import Carousel from "react-bootstrap/Carousel";
import photo1 from "./assets/photo1.avif";
import photo2 from "./assets/photo2.avif";
import photo3 from "./assets/photo3.avif";
import { Container } from "react-bootstrap";
function Home() {
  return (
    <Container>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={photo1} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo2} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo3} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home;