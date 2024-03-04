import { withAuthenticator } from "@aws-amplify/ui-react";
import { useContext, useEffect } from "react";
import { checkUser } from "../../Apis/AuthUtils";
import { myUserContext } from "../Context/MyUserContext";
import { NoUser } from "./NoUser/NoUser";
import { User } from "./User/User";

const Profile = () => {
    const { user, setUser, setUserAttributes } = useContext(myUserContext);

    useEffect(() => {
        checkUser({ setUser, setUserAttributes });
    }, []);

    return <div>{user ? <User /> : <NoUser />}</div>;
};

// aws withAuthenticator() creates account signIN / creation over lay
export default withAuthenticator(Profile);
