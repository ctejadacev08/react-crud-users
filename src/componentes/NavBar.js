import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">React-Bootstrap</NavLink>
        <Navbar.Toggle aria-controls="react-navbar"></Navbar.Toggle>
        <Navbar.Collapse id="react-navbar">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/users" className="nav-link">Users</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
