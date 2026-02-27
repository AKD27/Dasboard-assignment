import React from "react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
      <div 
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
        onClick={() => setIsOpen(false)}
      />
    )}

    <div className={`
          fixed md:static top-0 left-0 h-full z-50
          w-64 bg-[#2D2A26] text-white
          flex flex-col justify-between
          rounded-none md:rounded-2xl
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}>
      
        <div className=" flex gap-24 p-6 text-2xl font-bol justify-center items-center">
           <img src="./public/images/core.png" alt="logo" className="w-22 h-22"/>
           <img src="./public/images/arrow.png"
            alt="logo" 
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsOpen(false)}
            />
        </div>

        <nav className="space-y-2 px-4">
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
            <img src="./public/images/Home.png"/>
            Home
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          <img src="./public/images/info.png" />
            My Info
            <img src="./public/images/singlearrow.png" />
          </div>
          <div className="p-3 rounded-lg text-[#947550] cursor-pointer flex items-center gap-2 bg-white ">
          <img src="./public/images/people.png" />
            People
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          <img src="./public/images/Team.png" />
            Team Management
            <img src="./public/images/singlearrow.png" />
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          <img src="./public/images/project.png" />
            Project Setup
            <img src="./public/images/singlearrow.png" />
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          <img src="./public/images/hiring.png" />
            Hiring
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          <img src="./public/images/reports.png" />
            Report
          </div>
        </nav>
      

      <div className="border border-gray-600 rounded-xl m-4 cursor-pointer">
        <button className=" bg-[#2D2A26] m-2 flex justify-center gap-2 ">
        <img src="./public/images/settings.png" />
          Settings
        </button>
      </div>
    </div>
    </>
  );
};

export default Sidebar;