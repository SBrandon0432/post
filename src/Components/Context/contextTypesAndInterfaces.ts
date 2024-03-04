export interface UserContextProps {
    singedIN: boolean;
    setSignedIN(singedIN: boolean): void;
    user: any;
    setUser(user: any): void;
    userAttributes: any;
    setUserAttributes(userAttributes: any): void;
}
