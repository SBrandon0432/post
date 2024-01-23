import { getCurrentUser } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import { Paths } from "../../../Types/types";
import { myUserContext } from "../../Context/MyUserContext";
import "./NavItemsS.scss";

export const NavItems = () => {
    const { singedIN, setSignedIN } = useContext(myUserContext);

    const authListener = async () => {
        Hub.listen("auth", (data) => {
            switch (data?.payload?.event) {
                case "signedIn":
                    return setSignedIN(true);
                case "signedOut":
                    return setSignedIN(false);
            }
        });
        try {
            await getCurrentUser();
            setSignedIN(true);
        } catch (err) {
            console.error(err);
        }
    };
    authListener();

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
