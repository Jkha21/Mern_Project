import { useState } from "react";
import { LoginUser } from "../../utils/Api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [nameActive, setNameActive] = useState(false);
    const [passActive, setPassActive] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async() =>{
        const data = await LoginUser("/login", {name: userName, password});
        localStorage.setItem("username", data.data.data.name);
        localStorage.setItem("accessToken", data.data.data.token);
        if(data){
            navigate("/dashboard");
        }
    }

    // {
    //     "name": "OldBridge",
    //     "password": "key@lock"
    // }

    return (
        <div className="border border-black w-[70%] ml-[15%] mt-32">
            <div className="bg-yellow-500 text-white p-4 text-2xl pl-12">Login Page</div>
            <div className="flex flex-col p-4">
                <div className="flex flex-row text-2xl p-4 justify-between w-[70%] pl-[30%]">
                    <span>User Name</span>
                    <input type="text" className="border border-black pl-2 text-base rounded h-10" onChange={(e) => setUserName(e.target.value)}/>
                </div>
                {nameActive && <span className="ml-[49%] text-sm text-red-700 -mt-3">User Not Found</span>}
                <div className="flex flex-row justify-between text-2xl p-4 w-[70%] pl-[30%]">
                    <span>Password</span>
                    <input type="text" className="border border-black pl-2 text-base rounded h-10" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {passActive && <span className="ml-[49%] text-sm text-red-700 -mt-3">Password Not Matched</span>}
                <div className="flex flex-row justify-end w-[68.5%] pt-6"> 
                    <button className="text-white pl-8 pr-8 pb-2 pt-2 bg-green-500 rounded hover:bg-gray-300" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
