import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import logo from "../../Assets/Logo.png"

export const RootLayout = () => {
    return (
        <div style={{background: "#e7e5df"}}>
            <header className="d-flex justify-content-between p-2">
                <NavLink className="text-decoration-none my-text-color overflow-hidden " style={{height:"60px"}} to="/">
                    <img className="img-fluid h-100" src={logo} alt=""/>
                </NavLink>
                <div>
                    <NavLink className="text-decoration-none px-1 my-text-color" to="/Resume"> Resume</NavLink> |
                    <NavLink className="text-decoration-none px-1 my-text-color" to="/Project"> Project </NavLink> |
                    <NavLink className="text-decoration-none px-1 my-text-color" to="/Contact"> Contact </NavLink>
                </div>
            </header>
            <main style={{minHeight: "100vh"}}>
                <Outlet/>
            </main>
        </div>
    )
}
