import React from 'react';

const Home = () => {
  return (
    <div className="home-container flex">
      <div className="image-section flex-1 mb-8">
        <div className="bg-white  shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="relative">
            <img
              src="./src/assets/natur.jpg"
              alt="Nature"
              className="w-full  object-cover"
            />
          </div>

          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">TITLE HEADING</h2>
            <p className="text-gray-600 mb-4">Title description, April 7, 2014</p>
          
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident porro vitae, sed quibusdam alias...
            </p>

            <div className="flex justify-between items-center mb-6">
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-200 border border-gray-300 hover:border-gray-400">
                Read More
              </button>
              <span className="flex items-center text-gray-600 hover:text-blue-500 transition-colors cursor-pointer">
                <i className="fas fa-comments mr-2"></i>
                <span className="font-medium">Comments 0</span>
              </span>
            </div>

            {/* <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Comments</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">John Doe</h4>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-gray-700">Great article! Thanks for sharing.</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="sidebar w-1/3 ml-4">
        <div className="profile bg-white p-4 rounded-lg shadow-md">
          <img src="./src/assets/pencil.jpeg" alt="Profile" className="profile-image w-100 h-100" />
          <h3 className="text-xl font-semibold">My Name</h3>
          <p className="text-gray-700">Just me, myself and I, exploring the universe of unknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
        </div>
        <div className="popular-posts mt-4 p-4 border rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-semibold">Popular Posts</h3>
          <div className="post-box mb-4 p-2 border rounded shadow flex items-center">
            <img src="./src/assets/p.jpg" alt="Popular Post 1" className="popular-posts-image h-30 w-30 object-cover mr-4" />
            <div className="flex-1">
              <h6 className="font-medium">Lorem</h6>
              <p className="text-gray-600 text-sm">Sed mattis nunc</p>

            </div>
          </div>
          <div className="post-box mb-4 p-2 border rounded shadow flex items-center">
            <img src="./src/assets/p1.jpg" alt="Popular Post 2" className="popular-posts-image h-30 w-30 object-cover mr-4" />
            <div className="flex-1">
              <h6 className="font-medium">Ipsum</h6>
              <p className="text-gray-600 text-sm">Praes tinci sed</p>

            </div>
          </div>
          <div className="post-box mb-4 p-2 border rounded shadow flex items-center">
            <img src="./src/assets/p2.jpg" alt="Popular Post 3" className="popular-posts-image h-30 w-30 object-cover mr-4" />
            <div className="flex-1">
              <h6 className="font-medium">Dorum</h6>
              <p className="text-gray-600 text-sm">Sed mattis nunc</p>

            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="tags-section mt-4 p-4 border rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              #Travel
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              #Nature
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              #Photography
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              #Art
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              #Design
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
              #Style
            </span>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home; 