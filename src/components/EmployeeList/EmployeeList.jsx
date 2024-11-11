import Icon from '../49862020.jpg'
import { useNavigate } from 'react-router-dom';

const EmployeeList = () =>{
    const navigate = useNavigate();
    return (
        <>  
        <div>
            <div className="bg-yellow-300 p-2 pl-8 text-xl">Employee List</div>
            <div className="flex flex-row justify-end p-2">
                <span className="flex items-center mr-[10%]">Total Count: 4</span>
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
                <tr className='text-sm '>
                    <td className="text-center border border-black">1</td>
                    <td className='flex justify-center p-2'>
                        <img src={Icon} alt="Image" className="w-24 h-24"/>
                    </td>
                    <td className="text-left border border-black text-wrap">Hukum Gagjhfs Jdghksifyh</td>
                    <td className="border border-black">hcgupta@gmail.com</td>
                    <td className="border border-black ">9482378273</td>
                    <td className="border border-black">Sales</td>
                    <td className="border border-black">Male</td>
                    <td className="border border-black">MCA</td>
                    <td className="border border-black ">13-Feb-21</td>
                    <td className="border border-black">
                        <span>Edit-</span>
                        <span>Delete</span>
                    </td>
                </tr>
            
            </table>
        </div>
        </>
    )
}

export default EmployeeList;