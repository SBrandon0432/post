import { Route, Routes } from "react-router-dom";
import { Paths } from "../../Types/types";
import { Home } from "../Home/Home";
import { NavBar } from "../NavBar/NavBar";
import "./AppS.scss";

export const App = () => {
    return (
        <div className="App">
            <NavBar />
            <div className="routes">
                <Routes>
                    <Route path={Paths.HOME} element={<Home />} />
                </Routes>
            </div>
        </div>
    );
};
