const CreateEmployee = () =>{
    return (
        <>
            <div >
                <div className="bg-yellow-300 p-2 pl-8 text-xl">Create Employee</div>
                    <form action="submit">
                    <div className="w-[50%] text-xl pl-[10%] pt-[2%]">
                        <div className="flex flex-row justify-between p-4">
                            <span>Name</span>
                            <input type="text" className="border border-black rounded h-10 pl-3"/>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                            <span>Email</span>
                            <input type="text" className="border border-black rounded h-10 pl-3"/>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                            <span>Mobile No</span>
                            <input type="text" className="border border-black rounded h-10 pl-3"/>
                        </div>
                        <div className="flex flex-row gap-[37%] p-4">
                            <span>Designation</span>
                            <select id="role" name="role" className="border border-black rounded text-sm pl-2">
                                <option value="">Option</option>
                                <option value="hr">HR</option>
                                <option value="manager">Manager</option>
                                <option value="sales">Sales</option>
                            </select>
                        </div>
                        <div className="flex flex-row justify-between p-4">
                            <span className="mr-[27%]">Gender</span>
                            <div >
                                <input type="radio" className="mr-2 w-4" id="male" name="gender"/>
                                <label htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input type="radio" className="mr-2" id="female" name="gender"/>
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between p-4 ">
                            <span className="mr-[38%]">Course</span>
                            <div>
                                <input type="checkbox" className="border border-black rounded mr-1" name="course" id="mca" />
                                <label for="mca">MCA</label>
                            </div>
                            <div>
                                <input type="checkbox" className="border border-black rounded mr-1" name="course" id="bca" />
                                <label for="bca">BCA</label>
                            </div>
                            <div>
                                <input type="checkbox" className="border border-black rounded mr-1" name="course" id="bsc" />
                                <label for="bsc">BSC</label>
                            </div>
                        </div>
                        <div className="flex flex-row p-4 items-center">
                            <span className="mr-[44%]">Img Upload</span>
                            <input type="file" className="text-sm "/>
                        </div>

                    </div>
                    <div className="flex flex-row justify-end w-[37%]">
                        <button className="bg-green-500 pl-3 pr-3 pt-1 pb-1 text-white rounded">Submit</button>
                    </div>
                    </form>
            </div>

        </>
    )
}

export default CreateEmployee;