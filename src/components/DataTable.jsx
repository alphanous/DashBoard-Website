import React, { useState } from "react";
import employees from "../components/Employees"; // Adjust the path as necessary

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const employeesPerPage = 5;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredEmployees = employees
    .filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.experience - b.experience;
      } else {
        return b.experience - a.experience;
      }
    });

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex justify-content-between mb-3">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
            className="form-control w-25"
          />
          <button onClick={handleSort} className=" sort">
          <i className={sortOrder === "asc" ? "bi bi-sort-down" : "bi bi-sort-up-alt"}></i> 
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr className="highlight">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Experience</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee, index) => (
              <tr key={index}>
                <th scope="row">{indexOfFirstEmployee + index + 1}</th>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>{employee.experience} Years</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button className="pages" onClick={handlePrevPage} disabled={currentPage === 1}>
          <i class="bi bi-arrow-left-circle-fill"></i>
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button className="pages" onClick={handleNextPage} disabled={currentPage === totalPages}>
          <i class="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
