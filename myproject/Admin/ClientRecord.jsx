import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Importing trash bin icon
import { useNavigate } from "react-router-dom"; // Importing useNavigate from react-router-dom

const ClientRecord = () => {
  const clientsData = [
    { name: "John Doe", email: "johndoe@gmail.com", phone: "+1 123-456-7890", company: "Tech Solutions", status: "Unverified" },
    { name: "Jane Smith", email: "janesmith@example.com", phone: "+44 987-654-3210", company: "Creative Co.", status: "Unverified" },
    { name: "Mark Lee", email: "marklee@business.com", phone: "+91 555-222-1111", company: "Innovate Ltd.", status: "Verified" },
    { name: "John Doe", email: "johndoe@gmail.com", phone: "+1 123-456-7890", company: "Tech Solutions", status: "Unverified" },
    { name: "Jane Smith", email: "janesmith@example.com", phone: "+44 987-654-3210", company: "Creative Co.", status: "Unverified" },
    { name: "Mark Lee", email: "marklee@business.com", phone: "+91 555-222-1111", company: "Innovate Ltd.", status: "Verified" },
    { name: "John Doe", email: "johndoe@gmail.com", phone: "+1 123-456-7890", company: "Tech Solutions", status: "Unverified" },
    { name: "Jane Smith", email: "janesmith@example.com", phone: "+44 987-654-3210", company: "Creative Co.", status: "Unverified" },
    { name: "Mark Lee", email: "marklee@business.com", phone: "+91 555-222-1111", company: "Innovate Ltd.", status: "Verified" },
    { name: "John Doe", email: "johndoe@gmail.com", phone: "+1 123-456-7890", company: "Tech Solutions", status: "Unverified" },
    { name: "Jane Smith", email: "janesmith@example.com", phone: "+44 987-654-3210", company: "Creative Co.", status: "Unverified" },
    { name: "Mark Lee", email: "marklee@business.com", phone: "+91 555-222-1111", company: "Innovate Ltd.", status: "Verified" },
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [clients, setClients] = useState(clientsData);

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Filter clients based on search query, company, and status
  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCompany = selectedCompany === "All" || client.company === selectedCompany;
    const matchesStatus = selectedStatus === "All" || client.status === selectedStatus;
    return matchesSearch && matchesCompany && matchesStatus;
  });

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentClients = filteredClients.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
    setCurrentPage(1);
  };
  const handleBack = () => {
    navigate("/admin"); // Replace "/admin" with your actual admin panel route
  };
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleStatusUpdate = (index, newStatus) => {
    const updatedClients = [...clients];
    updatedClients[index].status = newStatus;
    setClients(updatedClients);
  };

  const handleActionChange = (index, action) => {
    if (action === "Verify") {
      handleStatusUpdate(index, "Verified");
    } else if (action === "Unverify") {
      handleStatusUpdate(index, "Unverified");
    } else if (action === "Delete") {
      handleDeleteClient(index);
    }
  };

 

  // Handle back to admin panel button click
  const handleBackToAdminPanel = () => {
    navigate("/admin"); // Navigate to the admin panel page
  };

  return (
    <div className="flex min-h-screen bg-gray-50 px-5 py-10">
      <main className="flex-1">
      <header className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:shadow-lg transition-all"
          >
            Back to Admin Panel
          </button>
          
        </header>
        <div className="flex-grow ">
    <h1 className="text-3xl  text-center mb-4 font-bold text-gray-700">Client Records</h1>
  </div>
       

        <div className="mb-6 flex items-center gap-4">
          <input
            type="text"
            placeholder="Search Clients"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border rounded-md w-1/3"
          />
          <select
            value={selectedCompany}
            onChange={handleCompanyChange}
            className="px-4 py-2 border rounded-md"
          >
            <option value="All">All Companies</option>
            <option value="Tech Solutions">Tech Solutions</option>
            <option value="Creative Co.">Creative Co.</option>
            <option value="Innovate Ltd.">Innovate Ltd.</option>
          </select>
          <select
            value={selectedStatus}
            onChange={handleStatusChange}
            className="px-4 py-2 border rounded-md"
          >
            <option value="All">All Status</option>
            <option value="Verified">Verified</option>
            <option value="Unverified">Unverified</option>
          </select>
        </div>

        <section>
          <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Client Name</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Email</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Phone</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Company</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentClients.map((client, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50 transition-all">
                    <td className="px-4 py-3">{client.name}</td>
                    <td className="px-4 py-3">{client.email}</td>
                    <td className="px-4 py-3">{client.phone}</td>
                    <td className="px-4 py-3">{client.company}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-4 py-2 rounded-md ${client.status === "Verified" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        onChange={(e) => handleActionChange(index, e.target.value)}
                        className="px-4 py-2 border rounded-md"
                      >
                        <option value="">Select Action</option>
                        <option value="Verify">Verify</option>
                        <option value="Unverify">Unverify</option>
                      </select>
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-8 flex justify-between items-center">
          <span className="text-gray-600 text-sm">
            Showing {startIndex + 1}-{startIndex + currentClients.length} of {filteredClients.length}
          </span>
          <div>
            <button
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-all"
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="mx-4 text-gray-600">{currentPage}</span>
            <button
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-all"
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientRecord;
