import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <p className="text-left">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <Link to="/signup">
                <button className="bg-gray-500 text-white px-4 py-2 rounded">
                    Register Here
                </button>
            </Link>
        </footer>
    );
};

export default Footer; 