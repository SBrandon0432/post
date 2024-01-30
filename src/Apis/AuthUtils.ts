import { fetchUserAttributes, getCurrentUser, signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

import { UserContextProps } from "../Components/Context/contextTypesAndInterfaces";

export const authListener = async ({
    singedIN,
    setSignedIN,
}: Pick<UserContextProps, "singedIN" | "setSignedIN">) => {
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

export const checkUser = async ({
    setUser,
    setUserAttributes,
}: Pick<UserContextProps, "setUser" | "setUserAttributes">) => {
    const user = await getCurrentUser();
    const userAttributes = await fetchUserAttributes();
    // console.log(userAttributes);
    // console.log(user);
    setUser(user);
    setUserAttributes(userAttributes);
};

export async function handleSignOut() {
    try {
        await signOut();
    } catch (error) {
        console.log("error signing out: ", error);
    }
}
