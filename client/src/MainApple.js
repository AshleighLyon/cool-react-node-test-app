import React from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import LogoutButton from './auth/logout';
import AppleHome from "./routes/Role2/AppleHome";
 
function MainApple() {

    return (
        <HashRouter>
            <div className = "MainAppleApp">
                    <div>
                        <h1>Cool React Node SP App</h1>
                        <ul className="header">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><LogoutButton /></li>
                        </ul>
                        <div className="content">
                            <Routes>
                                <Route exact path="/" element={<AppleHome/>}/>
                            </Routes>
                        </div>
                    </div>
            </div>
        </HashRouter>
    );
}
 
export default MainApple;