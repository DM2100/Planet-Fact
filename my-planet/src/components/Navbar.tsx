import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


export const NavbarComp = () => {
  return (
    <div>
      {" "}
      <Navbar expand="lg" className="bg-color-nav">
        <Container>
          <Navbar.Brand  className="styled-links">THE PLANETS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto custom-nav">
              <Nav.Link href="#" as={Link} to="/mercury" className="styled-links" >
                MERCURY
              </Nav.Link>
              <Nav.Link href="#" as={Link} to="/venus" className="styled-links">
                VENUS
              </Nav.Link>
              <Nav.Link href="#" as={Link} to="/earth" className="styled-links">
                EARTH
              </Nav.Link>
              <Nav.Link href="#" as={Link} to="/mars" className="styled-links">
                MARS
              </Nav.Link>
              <Nav.Link href="#"  as={Link} to="/jupiter" className="styled-links">
                JUPITER
              </Nav.Link>
              <Nav.Link href="#"  as={Link} to="/saturn" className="styled-links">
                SATURN
              </Nav.Link>
              <Nav.Link href="#" as={Link} to="/uranus" className="styled-links">
                URANUS
              </Nav.Link>
              <Nav.Link href="#" as={Link} to="/neptune" className="styled-links">
                NEPTUNE
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
