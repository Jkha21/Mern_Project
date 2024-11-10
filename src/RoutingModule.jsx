import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";

const RoutingModule = () =>{
    const AppRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        }
    ]);
    return <RouterProvider router={AppRoute}></RouterProvider>
}

export default RoutingModule;