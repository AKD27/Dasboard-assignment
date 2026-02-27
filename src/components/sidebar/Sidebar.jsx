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
           <img src="./images/core.png" alt="logo" className="w-22 h-22"/>
           <img src="./images/arrow.png"
            alt="logo" 
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsOpen(false)}
            />
        </div>

        <nav className="space-y-2 px-4">
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
            <img src="./images/Home.png"/>
            Home
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          <img src="./images/info.png" />
            My Info
            <img src="./images/singlearrow.png" />
          </div>
          <div className="p-3 rounded-lg text-[#947550] cursor-pointer flex items-center gap-2 bg-white ">
          <img src="./images/People.png" />
            People
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          <img src="./images/Team.png" />
            Team Management
            <img src="./images/singlearrow.png" />
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          <img src="./images/Project.png" />
            Project Setup
            <img src="./images/singlearrow.png" />
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          <img src="./images/hiring.png" />
            Hiring
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          <img src="./images/reports.png" />
            Report
          </div>
        </nav>
      

      <div className="border border-gray-600 rounded-xl m-4 cursor-pointer">
        <button className=" bg-[#2D2A26] m-2 flex justify-center gap-2 ">
        <img src="./images/settings.png" />
          Settings
        </button>
      </div>
    </div>
    </>
  );
};

export default Sidebar;