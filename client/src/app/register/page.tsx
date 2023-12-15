"use client"

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS file for Font Awesome

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              onChange={e=>handleChange(e)}
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faEnvelope} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:border-blue-500 text-black"
              onChange={e=>handleChange(e)}
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faLock} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:border-blue-500 text-black"
              onChange={e=>handleChange(e)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
