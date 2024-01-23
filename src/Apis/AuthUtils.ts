import { getCurrentUser } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

import { UserContextProps } from "../Components/Context/contextTypesAndInterfaces";

export const authListener = async ({
    singedIN,
    setSignedIN,
}: UserContextProps) => {
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
