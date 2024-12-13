import { useEffect, useState } from 'react';
import { DeleteEmployee, GetAllEmployees } from '../../utils/Api';
import Icon from '../49862020.jpg'
import { useNavigate } from 'react-router-dom';

const EmployeeList = () =>{
    const navigate = useNavigate();
    const [employeeList, setEmployeeList] = useState([]);
    const getAllEmployees = async() =>{
        const data = await GetAllEmployees("");
        setEmployeeList(data.data.data);
    };

    const handleAction = async(item, action) =>{
        if(action === "delete"){
            const data = await DeleteEmployee(`${item._id}`);
            getAllEmployees();
        }else if(action === "edit"){
            const data = {action: "edit", list: item};
            navigate("/dashboard/create", {state: data});
        }
    }
    
    useEffect(() =>{
        getAllEmployees();
    }, []);

    return (
        <>  
        <div>
            <div className="bg-yellow-300 p-2 pl-8 text-xl">Employee List</div>
            <div className="flex flex-row justify-end p-2">
                <span className="flex items-center mr-[10%]">Total Count: {employeeList.length}</span>
                <button className="bg-green-400 pl-4 pr-4 pt-2 pb-2 text-white rounded mr-[10%] " onClick={() => navigate("/dashboard/create")}>Create Employee</button>
            </div>
            <table className="border border-black w-full">
                <tr className="bg-blue-300">
                    <th className="border border-black p-1">Unique Id</th>
                    <th className="border border-black">Image</th>
                    <th className="border border-black">Name</th>
                    <th className="border border-black">Email</th>
                    <th className="border border-black">Mobile No</th>
                    <th className="border border-black">Designation</th>
                    <th className="border border-black">Gender</th>
                    <th className="border border-black">Course</th>
                    <th className="border border-black">Create Date</th>
                    <th className="border border-black">Action</th>
                </tr>
                {employeeList.map(item =><tr className='text-sm '>
                    <td className="text-center border border-black">1</td>
                    <td className='flex border border-gray-400 justify-center p-2'>
                        <img src={item.image.path} alt="Image" className="w-24 h-24"/>
                    </td>
                    <td className="text-left border border-black text-wrap">{item.name}</td>
                    <td className="border border-black">{item.emailId}</td>
                    <td className="border border-black ">{item.mobNo}</td>
                    <td className="border border-black">{item.designation}</td>
                    <td className="border border-black">{item.gender}</td>
                    <td className="border border-black">{item.course}</td>
                    <td className="border border-black ">
                        {new Date(item.createdAt).toISOString().slice(0, 10).split('-').reverse().join('-')}
                    </td>
                    <td className="border border-black">
                        <span className="cursor-pointer" onClick={() => handleAction(item, "edit")}>Edit </span>
                         -
                        <span className="cursor-pointer" onClick={() => handleAction(item, "delete")}> Delete</span>
                    </td>
                </tr>)}
            
            </table>
        </div>
        </>
    )
}

export default EmployeeList;