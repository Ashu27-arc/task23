import React from 'react';
import { Link } from 'react-router-dom';
// Using a placeholder logo URL
const logo = './src/assets/logo.jpg'; // Placeholder logo URL

const Navbar = () => {
    return (
        <nav className="bg-white p-4 border-gray-300">
            <ul className="flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/BlogPost">
                        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                    </Link>
                </div>
                <div className="flex-grow text-center">
                    <li className="inline"><Link className="text-black" to="/">Home</Link></li>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/login">
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                Login
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                Signup
                            </button>
                        </Link>
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navbar; 