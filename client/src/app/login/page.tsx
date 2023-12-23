"use client"

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState } from 'react';
import { login } from '@/services/LoginService';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async(e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await login(userData.email, userData.password);
    console.log(response);
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="space-y-4">
          <div className="relative">
            <FontAwesomeIcon icon={faUser} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:border-blue-500 text-black"
              name='email'
              onChange={e=>handleChange(e)}
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faLock} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:border-blue-500 text-black"
              name='password'
              onChange={e=>handleChange(e)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            onClick={e=>handleSubmit(e)}
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className='text-black'>
            Nie masz konta?{' '}
            <Link href="/register" className="text-blue-500 hover:underline">
              Zarejestruj się
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
