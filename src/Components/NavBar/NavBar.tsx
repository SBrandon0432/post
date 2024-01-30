import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBarS.scss";
import { NavItems } from "./NavItems/NavItems";

export const NavBar = () => {
    return (
        <Navbar className="NavBar" fixed="top">
            <Container>
                <Navbar.Brand href="/home" className="brand">
                    Brand link
                </Navbar.Brand>
            </Container>
            <NavItems />
        </Navbar>
    );
};
