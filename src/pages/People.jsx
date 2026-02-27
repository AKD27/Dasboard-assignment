import MainLayout from "../layout/MainLayout";
import EmployeeGrid from "../components/employees/EmployeeGrid";
import SearchBar from "../components/employees/SearchBar";

const People = () => {
  return (
    <MainLayout>
      <SearchBar />
      <EmployeeGrid />
    </MainLayout>
  );
};

export default People;