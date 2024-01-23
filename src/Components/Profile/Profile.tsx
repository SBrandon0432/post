import { useContext, useEffect } from "react";
import { checkUser } from "../../Apis/AuthUtils";
import { myUserContext } from "../Context/MyUserContext";
import { NoUser } from "./NoUser/NoUser";
import { User } from "./User/User";

export const Profile = () => {
    const { user, setUser } = useContext(myUserContext);

    useEffect(() => {
        checkUser({ setUser });
    }, []);

    return <div>{user ? <User /> : <NoUser />}</div>;
};
