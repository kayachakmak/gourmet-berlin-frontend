// src/components/RegisterForm.js
import React, { useState } from 'react';
import httpClient from '@/utils/httpClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClose(){
    window.location.href="/"
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await httpClient.post('/login', {
        email,
        password
      });
      if (response.ok) {
        alert("Succesfully logged in!");
        window.location.href="/"
      }
      // Redirect or display success message
    } catch (error) {
      console.error('Error during registration', error);
      // Handle error, display error message
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login to your account</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200 mr-2">Login</button>
          <button type="button" onClick={handleClose} className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition duration-200">Close</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
