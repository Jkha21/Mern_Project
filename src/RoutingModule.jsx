import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateEmployee from "./components/CreateEmployee/CreateEmployee";
import EmployeeList from "./components/EmployeeList/EmployeeList";


const RoutingModule = () =>{
    const AppRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/dashboard",
            element: <Dashboard/>,
            children: [
                {
                    path: "create",
                    element: <CreateEmployee/>
                },
                {
                    path: "list",
                    element: <EmployeeList/>
                }
            ]
            
        }
    ]);
    return <RouterProvider router={AppRoute}></RouterProvider>
}

export default RoutingModule;