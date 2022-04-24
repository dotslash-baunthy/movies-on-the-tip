// Navbar component on movies app client

import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="" />
                <Navbar.Collapse id="main-links">
                    <Nav>
                        <Nav.Link to="/movies-in-theatres" as={NavLink}>Movies in theatres</Nav.Link>
                        <Nav.Link to="/movies-coming" as={NavLink}>Coming soon</Nav.Link>
                        <Nav.Link to="/top-rated-india" as={NavLink}>Top rated Indian</Nav.Link>
                        <Nav.Link to="/top-rated-movies" as={NavLink}>Top rated movies</Nav.Link>
                        <Nav.Link to="/favourite" as={NavLink}>Favourites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Navigation;