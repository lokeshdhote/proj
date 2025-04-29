import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation

const ProjectRecord = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  // Sample project data with clientName and freelancerName
  const allProjects = [
    { name: "Website Revamp", status: "Ongoing", deadline: "2024-12-01", clientName: "ABC Corp", freelancerName: "John Doe", id: 1 },
    { name: "Mobile App Launch", status: "Pending", deadline: "2024-11-15", clientName: "XYZ Ltd", freelancerName: "Jane Smith", id: 2 },
    { name: "Marketing Campaign", status: "Completed", deadline: "2024-10-01", clientName: "Global Media", freelancerName: "Alice Cooper", id: 3 },
    { name: "E-commerce Website", status: "Ongoing", deadline: "2024-12-15", clientName: "ShopEase", freelancerName: "Bob Johnson", id: 4 },
    { name: "New Branding", status: "Completed", deadline: "2024-11-10", clientName: "Brandify", freelancerName: "Tom Brown", id: 5 },
    { name: "Internal Tool", status: "Pending", deadline: "2024-11-20", clientName: "Tech Solutions", freelancerName: "Emma Wilson", id: 6 },
    { name: "SEO Optimization", status: "Ongoing", deadline: "2024-12-05", clientName: "SEO Masters", freelancerName: "Michael Lee", id: 7 },
    { name: "Product Launch", status: "Completed", deadline: "2024-09-30", clientName: "Tech Giant", freelancerName: "Sara Lee", id: 8 },
    { name: "Feature Update", status: "Ongoing", deadline: "2024-12-25", clientName: "App Ventures", freelancerName: "David Clark", id: 9 },
    { name: "Security Patch", status: "Pending", deadline: "2024-11-22", clientName: "SecureTech", freelancerName: "Olivia Davis", id: 10 },
    { name: "Bug Fixes", status: "Ongoing", deadline: "2024-12-10", clientName: "FixIt", freelancerName: "Chris King", id: 11 },
    { name: "Customer Feedback", status: "Completed", deadline: "2024-08-30", clientName: "User Insights", freelancerName: "Sophia Harris", id: 12 },
  ];

  // State variables
  const [projects, setProjects] = useState(allProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Filter projects based on search term and status filter
  const filteredProjects = projects
    .filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((project) =>
      statusFilter === "All" ? true : project.status === statusFilter
    );

  // Pagination logic
  const indexOfLastProject = currentPage * rowsPerPage;
  const indexOfFirstProject = indexOfLastProject - rowsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handleStatusChange = (id, status) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, status } : project
      )
    );
  };



  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(filteredProjects.length / rowsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  // Navigate back to the admin panel
  const handleBackToAdminPanel = () => {
    navigate("/admin"); // Adjust this to your actual admin panel route
  };

  return (
    <div className="flex min-h-screen bg-gray-50 px-10 py-10">
      {/* Main Content */}
      <main className="flex-1">
        {/* Back to Admin Panel Button */}
        <button
          onClick={handleBackToAdminPanel}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow"
        >
          Back to Admin Panel
        </button>

        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-extrabold text-gray-700">Project Records</h1>
        </header>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by project name..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-md border border-gray-300"
          />
          {/* Status Filter Dropdown */}
          <select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            className="px-4 py-2 rounded-md border border-gray-300"
          >
            <option value="All">All Status</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Project Table */}
        <section>
          <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Project Name</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Deadline</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Client Name</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Freelancer Name</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentProjects.map((project) => (
                  <tr key={project.id} className="border-t hover:bg-gray-50 transition-all">
                    <td className="px-4 py-3">{project.name}</td>
                    <td
                      className={`px-4 py-3 ${project.status === "Ongoing" ? "text-yellow-600" : project.status === "Completed" ? "text-green-600" : "text-gray-600"}`}
                    >
                      {project.status}
                    </td>
                    <td className="px-4 py-3">{project.deadline}</td>
                    <td className="px-4 py-3">{project.clientName}</td>
                    <td className="px-4 py-3">{project.freelancerName}</td>
                    <td className="px-4 py-3 flex gap-2">
                      {/* Status Dropdown */}
                      <select
                        value={project.status}
                        onChange={(e) => handleStatusChange(project.id, e.target.value)}
                        className="bg-gray-200 px-4 py-2 rounded-md"
                      >
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                      </select>

                      {/* Delete Button */}
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pagination */}
        <div className="mt-8 flex justify-between items-center">
          <span className="text-gray-700">
            Showing {indexOfFirstProject + 1} to {indexOfLastProject} of {filteredProjects.length} projects
          </span>
          <div className="flex gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(filteredProjects.length / rowsPerPage)}
              className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectRecord;
