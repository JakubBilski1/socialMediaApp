"use client"

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { register } from "../../services/LoginService"
import { userError } from "../../types/Errors"

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  const [success, setSuccess] = useState<boolean>(false)
  const [message, setMessage] = useState<string>()
  const handleSubmit = async(e: React.FormEvent<HTMLButtonElement>) => {
    try{
      e.preventDefault();
      const response: userError | undefined = await register(userData.username, userData.email, userData.password)
      const mess = (response.data as { message?: string })?.message
      setMessage(mess)
      setSuccess(response.success)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form className="space-y-4">
          <div className="relative">
            <FontAwesomeIcon icon={faUser} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:border-blue-500 text-black"
              name="username"
              autoComplete='username'
              onChange={e=>handleChange(e)}
              required
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faEnvelope} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:border-blue-500 text-black"
              name="email"
              autoComplete='email'
              onChange={e=>handleChange(e)}
              required
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faLock} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:border-blue-500 text-black"
              name="password"
              autoComplete='password'
              onChange={e=>handleChange(e)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            onClick={e=>handleSubmit(e)}
          >
            Register
          </button>
        </form>
        <p className={success ? "text-green-600" : "text-red-600"}>{message && message}</p>
      </div>
    </div>
  );
};

export default Register;