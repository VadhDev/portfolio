import {Outlet} from "react-router-dom";
import NavBar from "../utils/resuableComponent/Navbar";

export const RootLayout = () => {
    return (
        <div className="sunrise-gradient">
            <header>
                <NavBar/>
            </header>
            <main style={{minHeight: "100vh"}}>
                <Outlet/>
            </main>
        </div>
    )
}
