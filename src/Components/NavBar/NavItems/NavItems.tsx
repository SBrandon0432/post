import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import { Paths } from "../../../Types/types";
import "./NavItemsS.scss";

export const NavItems = () => {
    return (
        <Container className="links">
            <Nav.Item>
                <Nav.Link href={Paths.HOME}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={Paths.HOME}>Create Post</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={Paths.HOME}>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={Paths.HOME}>My Posts</Nav.Link>
            </Nav.Item>
        </Container>
    );
};
