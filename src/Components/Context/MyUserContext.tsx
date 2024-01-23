import { ReactNode, createContext, useState } from "react";
import { UserContextProps } from "./contextTypesAndInterfaces";

export const myUserContext = createContext<UserContextProps>({
    singedIN: false,
    user: [],
    setSignedIN: () => {},
    setUser: () => {},
});

interface Props {
    children: ReactNode;
}

export const MyUserContextProvider = ({ children }: Props) => {
    const [singedIN, setSignedIN] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null);

    return (
        <myUserContext.Provider
            value={{
                user,
                singedIN,
                setSignedIN,
                setUser,
            }}
        >
            {children}
        </myUserContext.Provider>
    );
};
