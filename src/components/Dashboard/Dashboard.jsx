import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () =>{
    const navigate = useNavigate();
    const [user, setUser] = useState("User");
    const handleLogout = () =>{
        localStorage.removeItem("UserName");
        navigate("/")
    }
    useEffect(() =>{
        setUser(localStorage.getItem("username"));
    }, []);

    return (
        <>
            <div className="border-0 border-black">
                <div className="flex flex-row bg-blue-200 p-4 justify-around border border-black">
                    <span onClick={() => navigate("/dashboard")} className="cursor-pointer">Home</span>
                    <span onClick={() => navigate("/dashboard/list")} className="cursor-pointer">Employee List</span>
                    <span >{user}</span>
                    <span onClick={handleLogout} className="cursor-pointer">Logout</span>
                </div>
                {/* <div className="bg-yellow-300 p-2">Dashboard</div> */}
                {/* <div className="flex justify-center h-48 pt-4 text-xl">Welcome Admin Panel</div> */}
            </div>
            <Outlet/>      
        </>
    )
}

export default Dashboard;