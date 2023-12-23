import axios from "axios";

const login = async(email: string, password: string) => {
    try{
        const response = await axios.post("http://localhost:8000/auth/login", { email, password });
        return {
            success: true,
            data: response.data
        }
    } catch(error: any) {
        console.log(error);
        return {
            success: false,
            data: error.response.data
        }
    }
}

const register = async(username: string, email: string, password: string) => {
    try{
        const response = await axios.post("http://localhost:8000/auth/register", { username, email, password });
        console.log(response);
        return {
            success: true,
            data: response.data
        }
    } catch(error: any) {
        console.log(error);
        return {
            success: false,
            data: error.response.data
        }
    }
}

export {
    login,
    register
}