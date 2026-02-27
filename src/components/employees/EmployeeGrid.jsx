import EmployeeCard from "./EmployeeCard";
import employees from "../../data/employees";

const EmployeeGrid = () => {
  return (
    <div className="flex flex-col gap-6 mt-6 border bg-white rounded-2xl p-3">
      <div className= "flex flex-col md:flex-row lg:items-center justify-between">
        <div className= "flex items-center border-2 border-gray-300 rounded-2xl p-1 md:w-[30%]">
        <img src="./images/search.png" alt="search" className="w-4 h-4" />
        <input className=" text-md p-1 w-full" placeholder="Search for Employees Name or Number" />
      </div>
      <div className= "flex flex-row items-center md:gap-4 gap-8 mt-3 md:mt-0">
        <img src="./images/Action.png" alt="filter" className="md:w-9 md:h-9 w-7 h-7" />
        <img src="./images/Filter.png" alt="filter" className="md:w-9 md:h-9 w-7 h-7" />
        <img src="./images/Plus.png" alt="filter" className="md:w-9 md:h-9 w-7 h-7" />
        <div className="flex md:gap-3 gap-2 p-0.5 border border-gray-300 rounded-xl">
          <img src="./images/App.png" alt="filter" className="md:w-9 md:h-9 w-7 h-7" />
          <img src="./images/List.png" alt="filter" className="md:w-9 md:h-9 w-7 h-7" />
          <img src="./images/Tree.png" alt="filter" className="md:w-9 md:h-9 w-7 h-7" />
        </div>
        
      </div>
      </div>
      
      <div className="flex flex-wrap gap-10 mt-6 justify-center">
         {employees.map((emp) => (
      <div
        key={emp.id}
        className="w-full md:w-1/3 lg:w-1/5"
      >
       <EmployeeCard employee={emp} />
     </div>
    ))}
      </div>
    </div>
  );
};

export default EmployeeGrid;