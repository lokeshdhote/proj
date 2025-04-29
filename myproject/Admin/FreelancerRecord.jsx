import React, { useState, useEffect } from "react";
import { freelancers as initialFreelancers } from "../Admin/data"; // Import freelancers data
import { useNavigate } from "react-router-dom"; // Import useNavigate

const FreelancerRecord = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [verifiedFilter, setVerifiedFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [freelancers, setFreelancers] = useState(initialFreelancers);
  const itemsPerPage = 10;
  const navigate = useNavigate(); // Initialize navigate

  // Filter function to update freelancers based on search and filter criteria
  const filterFreelancers = () => {
    let filtered = initialFreelancers;

    if (searchQuery) {
      filtered = filtered.filter(freelancer =>
        freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        freelancer.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (specializationFilter) {
      filtered = filtered.filter(freelancer =>
        freelancer.spec.toLowerCase().includes(specializationFilter.toLowerCase())
      );
    }

    if (verifiedFilter) {
      const isVerified = verifiedFilter === "verified";
      filtered = filtered.filter(freelancer => freelancer.verified === isVerified);
    }

    setFreelancers(filtered);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle specialization filter change
  const handleSpecializationChange = (e) => {
    setSpecializationFilter(e.target.value);
  };

  // Handle verified status filter change
  const handleVerifiedChange = (e) => {
    setVerifiedFilter(e.target.value);
  };

  // Handle status change (verify/unverify)
  const handleStatusChange = (index, status) => {
    const updatedFreelancers = [...freelancers];
    updatedFreelancers[index].verified = status === "verified";
    setFreelancers(updatedFreelancers);
  };

 
  // Pagination logic to calculate the freelancers to be displayed based on current page
  const paginatedFreelancers = freelancers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Change page
  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === "next") {
        return Math.min(Math.ceil(freelancers.length / itemsPerPage), prevPage + 1);
      } else if (direction === "prev") {
        return Math.max(1, prevPage - 1);
      }
      return prevPage;
    });
  };

  // Filter freelancers whenever filters or search query change
  useEffect(() => {
    filterFreelancers();
  }, [searchQuery, specializationFilter, verifiedFilter]);

  // Navigate back to the admin panel
  const handleBack = () => {
    navigate("/admin"); // Replace "/admin" with your actual admin panel route
  };

  return (
    <div className="flex min-h-screen bg-gray-50 px-5 py-10">
      <main className="flex-1">
        {/* Header */}
        <header className="flex  gap-[20vw]  mb-4">
  <button
    onClick={handleBack}
    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:shadow-lg transition-all"
  >
    Back to Admin Panel
  </button>

  {/* This wrapper will center the heading */}
  
</header>
<div className="flex-grow ">
    <h1 className="text-3xl  text-center mb-4 font-bold text-gray-700">Freelancer Records</h1>
  </div>


        {/* Search and Filter */}
        <section className="mb-6 flex justify-between items-center">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search freelancers..."
              className="border rounded-lg px-4 py-2 w-80"
              value={searchQuery}
              onChange={handleSearchChange}
            />

            <select
              className="border rounded-lg px-4 py-2"
              value={specializationFilter}
              onChange={handleSpecializationChange}
            >
              <option value="">All Specializations</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Content Writing">Content Writing</option>
              {/* Add more specialization options here */}
            </select>

            <select
              className="border rounded-lg px-4 py-2"
              value={verifiedFilter}
              onChange={handleVerifiedChange}
            >
              <option value="">All Status</option>
              <option value="verified">Verified</option>
              <option value="unverified">Unverified</option>
            </select>
          </div>
        </section>

        {/* Freelancer Table */}
        <section>
          <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Name</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Specialization</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Email</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Rating</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-gray-800 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedFreelancers.map((freelancer, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50 transition-all">
                    <td className="px-4 py-3">{freelancer.name}</td>
                    <td className="px-4 py-3">{freelancer.spec}</td>
                    <td className="px-4 py-3">{freelancer.email}</td>
                    <td className="px-4 py-3">{freelancer.rating}</td>
                    <td className="px-4 py-3">
                      {freelancer.verified ? (
                        <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-lg flex items-center gap-2">
                          <i className="fas fa-check-circle"></i> Verified
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-lg flex items-center gap-2">
                          <i className="fas fa-times-circle"></i> Unverified
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <select
                        className="border rounded-lg px-4 py-2"
                        value={freelancer.verified ? "verified" : "unverified"}
                        onChange={(e) => handleStatusChange(index, e.target.value)}
                      >
                        <option value="verified">Verified</option>
                        <option value="unverified">Unverified</option>
                      </select>
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pagination */}
        <div className="mt-8 flex justify-between items-center">
          <span className="text-gray-600 text-sm">
            Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, freelancers.length)} of {freelancers.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange("prev")}
              className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 shadow transition-all"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange("next")}
              className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 shadow transition-all"
              disabled={currentPage * itemsPerPage >= freelancers.length}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FreelancerRecord;
