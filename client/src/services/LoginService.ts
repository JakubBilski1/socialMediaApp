import axios from "axios";

const Login = (email: string, password: string) => {
    const response = axios.post("/api/auth/login", { email, password });
    return response;
}

const Register = (username: string, email: string, password: string) => {
    const response = axios.post("/api/auth/register", { username, email, password });
    return response;
}
export {
    Login,
    Register
}