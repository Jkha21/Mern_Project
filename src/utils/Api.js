import axios from 'axios';
const BASE_URL_USER = "http://localhost:4000/api/v1/users";
const BASE_URL_EMPLOYEE = "http://localhost:4000/api/v1/employees";

const getAuth = () => {
    return `Bearer ${localStorage.getItem("accessToken")}`;
};


export const CreateUser = async(endpoint, payload) =>{
    return await axios.post(`${BASE_URL_USER}/${endpoint}`, payload);
};


export const LoginUser = async(endpoint, payload) =>{
    return await axios.post(`${BASE_URL_USER}/${endpoint}`, payload);
};



export const GetAllEmployees = async(endpoint) =>{
    return await axios.get(`${BASE_URL_EMPLOYEE}/${endpoint}`, {
        headers: {
            Authorization: getAuth()
        }
    }); 
};

export const CreateEmployee = async(endpoint, payload) =>{
    return await axios.post(`${BASE_URL_EMPLOYEE}/${endpoint}`, payload, {
        headers: {
            Authorization: getAuth()
        }
    });
};

export const GetEmployee  = async(endpoint) =>{
    return await axios.get(`${BASE_URL_EMPLOYEE}/${endpoint}`, {
        headers: {
            Authorization: getAuth()
        }
    });
};


export const UpdateEmployee = async(endpoint, payload) =>{
    return await axios.put(`${BASE_URL_EMPLOYEE}/${endpoint}`, payload, {
        headers: {
            Authorization: getAuth()
        }
    });
};

export const DeleteEmployee = async(endpoint) =>{
    return await axios.del(`${BASE_URL_EMPLOYEE}/${endpoint}`, {
        headers: {
            Authorization: getAuth()
        }
    });
};