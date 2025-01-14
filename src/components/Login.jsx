import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-4 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <div className="bg-white p-6 rounded shadow-md w-80">
                    <label className="block mb-2" htmlFor="email">Email:</label>
                    <input className="border rounded w-full p-2 mb-4" type="email" id="email" placeholder="Enter your email" />
                    
                    <label className="block mb-2" htmlFor="password">Password:</label>
                    <input className="border rounded w-full p-2 mb-4" type="password" id="password" placeholder="Enter your password" />
                    
                    <button className="bg-green-500 text-white rounded w-full p-2">LOGIN</button>
                </div>
            </div>
        </div>
    );
};

export default Login; 