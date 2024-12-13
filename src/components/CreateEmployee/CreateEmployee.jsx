import { useEffect, useState } from "react";
import { CreateEmployeeList, UpdateEmployee } from "../../utils/Api";
import { useLocation, useNavigate } from "react-router-dom";

const CreateEmployee = () =>{
    const [name, setName] = useState("");
    const [emailId, setEmailId]  = useState("");
    const [mobNo, setMobNo] = useState("");
    const [designation, setDesignation] = useState("");
    const [course, setCourse] = useState("");
    const [gender, setGender] = useState("");
    const [image, setImage] = useState({});
    let userId = "";
    const path = useLocation();
    const navigate = useNavigate();
    const {action, list} = path.state || {};

    const handleSubmit = async(action) =>{
        const formData = new FormData();
        formData.append("name", name);
        formData.append("emailId", emailId);
        formData.append("mobNo", mobNo);
        formData.append("designation", designation);
        formData.append("gender", gender);
        formData.append("course", course);
        // Append the image file if it exists
        if (image) {
            formData.append("image", image);
        };
        if(action !== "edit"){
            const data = await CreateEmployeeList("", formData);
        }else{
            const data = await UpdateEmployee(`${list._id}`, {name, emailId, designation, mobNo, gender, course});
        };
        setCourse("");
        setDesignation("");
        setEmailId("");
        setGender("");
        setMobNo("");
        setName("");
        navigate("/dashboard/list");
    };

    const handleDesignation = (e) =>{
        setDesignation(e.target.value);
    }

    const handleGenderChange = (e) =>{
        setGender(e.target.value);
    }

    const handleCourseChange = (e) =>{
        setCourse(e.target.value);
    }

    useEffect(() => {
        if (action === "edit" && list) {
            setName(list.name);
            setEmailId(list.emailId);
            setCourse(list.course);
            setDesignation(list.designation);
            setGender(list.gender);
            setMobNo(list.mobNo);
        }
    }, [action, list]);

    return (
        <>
            <div >
                <div className="bg-yellow-300 p-2 pl-8 text-xl">Create Employee</div>
                    <form action="submit">
                    <div className="w-[50%] text-xl pl-[10%] pt-[2%]">
                        <div className="flex flex-row justify-between p-4">
                            <span>Name</span>
                            <input type="text" className="border border-black rounded h-10 pl-3" value={name}  onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="flex flex-row justify-between p-4" >
                            <span>Email</span>
                            <input type="text" className="border border-black rounded h-10 pl-3" value={emailId} onChange={(e) => setEmailId(e.target.value)}/>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                            <span>Mobile No</span>
                            <input type="text" className="border border-black rounded h-10 pl-3" value={mobNo} onChange={(e) => setMobNo(e.target.value)}/>
                        </div>
                        <div className="flex flex-row gap-[37%] p-4">
                            <span>Designation</span>
                            <select id="role" name="role" className="border border-black rounded text-sm pl-2" value = {designation} onChange={handleDesignation}>
                                <option value="">Option</option>
                                <option value="Hr">HR</option>
                                <option value="Manager">Manager</option>
                                <option value="Sales">Sales</option>
                            </select>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                            <span className="mr-[27%]">Gender</span>
                            <div >
                                <input type="radio" className="mr-2 w-4" id="male" name="gender" value="male" checked={gender === "male"} onChange={handleGenderChange}/>
                                <label htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input type="radio" className="mr-2" id="female" name="gender" value="female" checked={gender === "female"} onChange={handleGenderChange}/>
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between p-4 ">
                            <span className="mr-[38%]">Course</span>
                            <div>
                                <input type="checkbox" className="border border-black rounded mr-1" name="course" id="mca" value="MCA" checked={course === "MCA"} onChange={handleCourseChange} />
                                <label htmlFor="mca">MCA</label>
                            </div>
                            <div>
                                <input type="checkbox" className="border border-black rounded mr-1" name="course" id="bca" value="BCA" checked={course === "BCA"} onChange={handleCourseChange} />
                                <label htmlFor="bca">BCA</label>
                            </div>
                            <div>
                                <input type="checkbox" className="border border-black rounded mr-1" name="course" id="bsc" value="BSC" checked={course === "BSC"} onChange={handleCourseChange} />
                                <label htmlFor="bsc">BSC</label>
                            </div>
                        </div>
                        <div className="flex flex-row p-4 items-center">
                            <span className="mr-[44%]">Img Upload</span>
                            <input type="file" className="text-sm " accept=".jpg, .jpeg, .png" onChange={(e) => setImage(e.target.files[0])}/>
                        </div>

                    </div>
                    </form>
                    <div className="flex flex-row justify-end w-[37%]">
                        <button className="bg-green-500 pl-3 pr-3 pt-1 pb-1 text-white rounded" onClick={()=> handleSubmit(action)}>Submit</button>
                    </div>
            </div>

        </>
    )
}

export default CreateEmployee;