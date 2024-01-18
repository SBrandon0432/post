import { ReactNode, createContext, useState } from "react";

interface UserContextProps {
    singedIN: boolean;
    setSignedIN(singedIN: boolean): void;
}

export const myUserContext = createContext<UserContextProps>({
    singedIN: false,
    setSignedIN: () => {},
});

interface Props {
    children: ReactNode;
}

export const MyUserContextProvider = ({ children }: Props) => {
    const [singedIN, setSignedIN] = useState<boolean>(false);
    return (
        <myUserContext.Provider
            value={{
                singedIN,
                setSignedIN,
            }}
        >
            {children}
        </myUserContext.Provider>
    );
};
