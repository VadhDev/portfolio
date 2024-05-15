import './App.css';
import {Routing} from "./App/routing/AppRoutes";
import {RouterProvider} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from "./App/redux/store";

function App() {
    return (
            <Provider store={store}>
                <RouterProvider router={Routing}/>
            </Provider>
    );
}

export default App;
