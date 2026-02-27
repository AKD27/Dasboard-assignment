const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center place-items-center hover:shadow-lg transition">
      <img
        src={employee.image}
        alt={employee.name}
        className="w-26 h-26  mx-auto mb-4"
      />
      <h2 className="font-semibold">{employee.name}</h2>
      <p className="text-sm text-gray-500">{employee.role}</p>
      <img
        src="./public/images/Indicator.png"
        alt="more"
        className="mt-2"
      />
    </div>
  );
};

export default EmployeeCard;