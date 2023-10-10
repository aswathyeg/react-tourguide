import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const NewNavbar = () => {
  return (
    <>
      <Navbar>
        <Container className="containerClass">
          <Navbar.Brand href="/" style={{ color: "darkgoldenrod" }}>
            Explore Hampi
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/writings">About</Nav.Link>
            <Nav.Link href="/works">Location</Nav.Link>
            <Nav.Link href="/works">Plan</Nav.Link>
            <Nav.Link href="/skills">Stay</Nav.Link>
            <Nav.Link href="/about">Books</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NewNavbar;
