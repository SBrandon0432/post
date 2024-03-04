import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { handleSignOut } from "../../../Apis/AuthUtils";
import { myUserContext } from "../../Context/MyUserContext";

export const User = () => {
    const { user, setUser, setSignedIN, userAttributes } =
        useContext(myUserContext);
    const { username } = user;
    const { email } = userAttributes;

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <ul>
                    <li>{username}</li>
                    <li>{email}</li>
                </ul>
            </div>
            <Button
                onClick={(e) => {
                    handleSignOut();
                    setUser(null);
                    setSignedIN(false);
                }}
            >
                sign out
            </Button>
        </div>
    );
};
