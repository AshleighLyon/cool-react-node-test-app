import React from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import LogoutButton from '../../auth/logout';
 
function Main() {
  
    return (
        <HashRouter>
            <div>
                <h1>Cool React Node SP App</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><LogoutButton /></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/stuff" element={<Stuff/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                    </div>
            </div>
        </HashRouter>
    );
}
 
export default Main;