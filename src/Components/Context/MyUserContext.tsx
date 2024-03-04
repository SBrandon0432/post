import { ReactNode, createContext, useState } from "react";
import { UserContextProps } from "./contextTypesAndInterfaces";

export const myUserContext = createContext<UserContextProps>({
    singedIN: false,
    user: [],
    setSignedIN: () => {},
    setUser: () => {},
    userAttributes: [],
    setUserAttributes: () => {},
});

interface Props {
    children: ReactNode;
}

// ToDo define what is user Looks like
export const MyUserContextProvider = ({ children }: Props) => {
    const [singedIN, setSignedIN] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null);
    const [userAttributes, setUserAttributes] = useState<any>(null);

    return (
        <myUserContext.Provider
            value={{
                user,
                singedIN,
                userAttributes,
                setUserAttributes,
                setSignedIN,
                setUser,
            }}
        >
            {children}
        </myUserContext.Provider>
    );
};
