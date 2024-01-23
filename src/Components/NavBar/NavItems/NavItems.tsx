import { useContext, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";

import { authListener } from "../../../Apis/AuthUtils";
import { Paths } from "../../../Types/types";
import { myUserContext } from "../../Context/MyUserContext";
import "./NavItemsS.scss";

export const NavItems = () => {
    const { singedIN, setSignedIN } = useContext(myUserContext);

    useEffect(() => {
        authListener({ singedIN, setSignedIN });
    }, []);

    return (
        <Container className="links">
            <Nav.Item className="path">
                <Nav.Link className="link" href={Paths.HOME}>
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="path">
                <Nav.Link className="link" href={Paths.HOME}>
                    Create Post
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="path">
                <Nav.Link className="link" href={Paths.HOME}>
                    Profile
                </Nav.Link>
            </Nav.Item>

            {singedIN && (
                <Nav.Item className="path">
                    <Nav.Link className="link" href={Paths.HOME}>
                        My Posts
                    </Nav.Link>
                </Nav.Item>
            )}
        </Container>
    );
};
