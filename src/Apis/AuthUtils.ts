import { getCurrentUser } from "aws-amplify/auth";
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
}: Pick<UserContextProps, "setUser">) => {
    const user = await getCurrentUser().then(() => {
        setUser(user);
    });
};
