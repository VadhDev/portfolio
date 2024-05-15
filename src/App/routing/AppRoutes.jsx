import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {RootLayout} from "./RootLayout";
import {Welcome} from "../module/welcome/Welcome";
import Contact from "../module/contact/component/Contact";
import Resume from "../module/resume/component/Resume";
import Project from "../module/project/component/Project";

const Routing = createBrowserRouter(

    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Welcome/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/resume" element={<Resume/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
        </Route>
    )
);

export {Routing}