import { useState } from "react"; 
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" md:flex h-16 md:h-screen bg-gray-100 p-2 md:gap-3 gap-2">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <div className="flex-1 flex flex-col">
       {/* Mobile menu button */}
       <div className= "md:hidden p-2">
        <button 
        onClick={() => setIsOpen(true)}
        className="text-2xl"
        >
          ☰
        </button>
       </div>
        <Navbar />
        <main className="p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;