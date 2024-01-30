import { Route, Routes } from "react-router-dom";
import { Paths } from "../../Types/types";
import { MyUserContextProvider } from "../Context/MyUserContext";
import { Home } from "../Home/Home";
import { NavBar } from "../NavBar/NavBar";

import Profile from "../Profile/Profile";
import "./AppS.scss";

export const App = () => {
    return (
        <div className="App">
            <MyUserContextProvider>
                <NavBar />
                <div className="routes">
                    <Routes>
                        <Route path={Paths.HOME} element={<Home />} />
                        <Route path={Paths.PROFILE} element={<Profile />} />
                    </Routes>
                </div>
            </MyUserContextProvider>
        </div>
    );
};
