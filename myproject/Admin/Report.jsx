import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // For the trash icon
import { useNavigate } from "react-router-dom";
const Report = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState([
    {
      id: 1,
      date: '2024-11-01',
      name: 'Monthly Sales Report',
      category: 'Sales',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-10-25',
      name: 'Quarterly Performance Report',
      category: 'Performance',
      status: 'Pending',
    },
    {
      id: 3,
      date: '2024-09-15',
      name: 'Annual Financial Report',
      category: 'Finance',
      status: 'Failed',
    },
    {
      id: 4,
      date: '2024-11-01',
      name: 'Monthly Sales Report',
      category: 'Sales',
      status: 'Completed',
    },
    {
      id: 5,
      date: '2024-10-25',
      name: 'Quarterly Performance Report',
      category: 'Performance',
      status: 'Pending',
    },
    {
      id: 6,
      date: '2024-09-15',
      name: 'Annual Financial Report',
      category: 'Finance',
      status: 'Failed',
    },
    {
      id: 7,
      date: '2024-11-01',
      name: 'Monthly Sales Report',
      category: 'Sales',
      status: 'Completed',
    },
    {
      id: 8,
      date: '2024-10-25',
      name: 'Quarterly Performance Report',
      category: 'Performance',
      status: 'Pending',
    },
    {
      id: 9,
      date: '2024-09-15',
      name: 'Annual Financial Report',
      category: 'Finance',
      status: 'Failed',
    },
    {
      id: 10,
      date: '2024-11-01',
      name: 'Monthly Sales Report',
      category: 'Sales',
      status: 'Completed',
    },
    {
      id: 11,
      date: '2024-10-25',
      name: 'Quarterly Performance Report',
      category: 'Performance',
      status: 'Pending',
    },
    {
      id: 12,
      date: '2024-09-15',
      name: 'Annual Financial Report',
      category: 'Finance',
      status: 'Failed',
    },
  ]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 10; // Define how many reports per page

  const handleStatusChange = (id, newStatus) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === id ? { ...report, status: newStatus } : report
      )
    );
  };

 
  const filteredReports = reports.filter(
    (report) =>
      (filter ? report.status === filter : true) &&
      report.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = filteredReports.slice(indexOfFirstReport, indexOfLastReport);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleBackToAdminPanel = () => {
    navigate("/admin"); // Navigate to the admin panel page
  };

  return (
    <div className="px-5 container mx-auto bg-white shadow-lg rounded-lg pt-24 mt-10">
     <button
          onClick={handleBackToAdminPanel}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow"
        >
          Back to Admin Panel
        </button>
      {/* Page Title */}
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
       
      </div>
     
      {/* Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label htmlFor="date-range" className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <input
            type="date"
            id="date-range"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search reports"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-end">
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>

      {/* Reports Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 font-semibold">
                Date
              </th>
              <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 font-semibold">
                Report Name
              </th>
              <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 font-semibold">
                Category
              </th>
              <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 font-semibold">
                Status
              </th>
              <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentReports.map((report) => (
              <tr key={report.id}>
                <td className="px-6 py-4 border-b">{report.date}</td>
                <td className="px-6 py-4 border-b">{report.name}</td>
                <td className="px-6 py-4 border-b">{report.category}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      report.status === 'Completed'
                        ? 'bg-green-200 text-green-800'
                        : report.status === 'Pending'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b">
                  <select
                    value={report.status}
                    onChange={(e) => handleStatusChange(report.id, e.target.value)}
                    className="px-2 py-1 border rounded-md"
                  >
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                  </select>
               
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-l-md"
        >
          Previous
        </button>
        <span className="px-4 py-2 flex items-center">{`Page ${currentPage}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastReport >= filteredReports.length}
          className="px-4 py-2 bg-gray-200 rounded-r-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Report;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const TabSwitchWarning = () => {
//   const [switchCount, setSwitchCount] = useState(0);
//   const navigate = useNavigate();

//   // Function to handle visibility change (tab switch)
//   const handleVisibilityChange = () => {
//     if (document.visibilityState === 'hidden') {
//       // User switches to a different tab
//       setSwitchCount(prevCount => {
//         if (prevCount < 3) {
//           alert(`You have switched tabs ${prevCount + 1} times. Please stay on this page.`);
//           return prevCount + 1;
//         } else {
//           // Redirect after 3 warnings
//           navigate('/second-page'); // Replace with your desired route
//           return prevCount;
//         }
//       });
//     }
//   };

//   useEffect(() => {
//     // Add the event listener for visibility change
//     document.addEventListener('visibilitychange', handleVisibilityChange);

//     // Clean up the event listener when component unmounts
//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to the Main Page</h1>
//       <p>Don't switch tabs too many times, or you'll be redirected!</p>
//     </div>
//   );
// };

// export default TabSwitchWarning;
