const Login = () => {
    return (
        <div className="border border-black w-[70%] ml-[15%] mt-32">
            <div className="bg-yellow-500 text-white p-4 text-2xl pl-12">Login Page</div>
            <div className="flex flex-col p-4">
                <div className="flex flex-row text-2xl p-4 justify-between w-[70%] pl-[30%]">
                    <span>User Name</span>
                    <input type="text" className="border border-black pl-2 text-base rounded h-10" />
                </div>
                <div className="flex flex-row justify-between text-2xl p-4 w-[70%] pl-[30%]">
                    <span>Password</span>
                    <input type="text" className="border border-black pl-2 text-base rounded h-10" />
                </div>
                <div className="flex flex-row justify-end w-[68.5%] "> 
                    <button className="text-white pl-8 pr-8 pb-2 pt-2 bg-green-500 rounded hover:bg-gray-300">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
