import './App.css';
import  {Routing} from "./App/Routing/AppRoutes";
import {RouterProvider} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <RouterProvider router={Routing}/>
    );
}

export default App;
