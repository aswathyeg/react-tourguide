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
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/location">Location</Nav.Link>
            <Nav.Link href="/plan">Plan</Nav.Link>
            <Nav.Link href="/stay">Stay</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NewNavbar;
