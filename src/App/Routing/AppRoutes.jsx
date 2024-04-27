import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {RootLayout} from "./RootLayout";
import {Welcome} from "../Module/Welcome/Welcome";

const Routing = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Welcome/>}></Route>
        </Route>
    )
);

export {Routing}