import React from 'react';
import logo from './path/to/logo.png'; // Update with the correct path to your logo

const BlogPost = () => {
    return (
        <div className="flex flex-col md:flex-row p-4">
            <div className="md:w-1/3 p-4">
                <h2 className="text-xl font-bold">My Name</h2>
                <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                
                <h3 className="mt-6 font-semibold">Popular Posts</h3>
                <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                    <li>Dorum</li>
                    <li>Mingsum</li>
                </ul>

                <h3 className="mt-6 font-semibold">Tags</h3>
                <div className="flex flex-wrap">
                    <span className="border rounded px-2 py-1 m-1">Travel</span>
                    <span className="border rounded px-2 py-1 m-1">New York</span>
                    <span className="border rounded px-2 py-1 m-1">London</span>
                    <span className="border rounded px-2 py-1 m-1">Clothing</span>
                </div>
            </div>

            <div className="md:w-2/3 p-4">
                <img src={logo} alt="Logo" className="h-16 mb-4" />
                <h2 className="text-2xl font-bold">TITLE HEADING</h2>
                <p className="text-gray-500">Title description, April 7, 2014</p>
                <p className="mt-4">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivas porttitor magna enim, ac accumsan tortor cursus at.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">READ MORE</button>
            </div>
        </div>
    );
};

export default BlogPost;