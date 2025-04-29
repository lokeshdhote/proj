import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Importing trash icon for delete button
import { useNavigate } from "react-router-dom";
const PaymentRecord = () => {
  const navigate = useNavigate(); 
  const [payments, setPayments] = useState([
    {
      date: "2024-11-20",
      id: "#TRX10293",
      amount: "$500",
      status: "Completed",
      statusColor: "green",
      method: "Credit Card",
    },
    {
      date: "2024-11-18",
      id: "#TRX10294",
      amount: "$250",
      status: "Pending",
      statusColor: "yellow",
      method: "PayPal",
    },
    {
      date: "2024-11-15",
      id: "#TRX10295",
      amount: "$1000",
      status: "Failed",
      statusColor: "red",
      method: "Bank Transfer",
    },
    {
      date: "2024-11-20",
      id: "#TRX10293",
      amount: "$500",
      status: "Completed",
      statusColor: "green",
      method: "Credit Card",
    },
    {
      date: "2024-11-18",
      id: "#TRX10294",
      amount: "$250",
      status: "Pending",
      statusColor: "yellow",
      method: "PayPal",
    },
    {
      date: "2024-11-15",
      id: "#TRX10295",
      amount: "$1000",
      status: "Failed",
      statusColor: "red",
      method: "Bank Transfer",
    },
    {
      date: "2024-11-20",
      id: "#TRX10293",
      amount: "$500",
      status: "Completed",
      statusColor: "green",
      method: "Credit Card",
    },
    {
      date: "2024-11-18",
      id: "#TRX10294",
      amount: "$250",
      status: "Pending",
      statusColor: "yellow",
      method: "PayPal",
    },
    {
      date: "2024-11-15",
      id: "#TRX10295",
      amount: "$1000",
      status: "Failed",
      statusColor: "red",
      method: "Bank Transfer",
    },
    {
      date: "2024-11-20",
      id: "#TRX10293",
      amount: "$500",
      status: "Completed",
      statusColor: "green",
      method: "Credit Card",
    },
    {
      date: "2024-11-18",
      id: "#TRX10294",
      amount: "$250",
      status: "Pending",
      statusColor: "yellow",
      method: "PayPal",
    },
    {
      date: "2024-11-15",
      id: "#TRX10295",
      amount: "$1000",
      status: "Failed",
      statusColor: "red",
      method: "Bank Transfer",
    },
    // Add more data as required
  ]);

  const [filters, setFilters] = useState({
    dateRange: { start: "", end: "" },
    status: "",
    method: "",
    search: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleStatusChange = (e, index) => {
    const updatedPayments = [...payments];
    updatedPayments[index].status = e.target.value;
    updatedPayments[index].statusColor =
      e.target.value === "Completed"
        ? "green"
        : e.target.value === "Pending"
        ? "yellow"
        : "red";
    setPayments(updatedPayments);
  };

 

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
    setCurrentPage(1); // Reset to the first page on filter change
  };

  // Filter payments based on filters
  const filteredPayments = payments.filter((payment) => {
    const { search, status, method, dateRange } = filters;
    const matchesSearch = payment.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status ? payment.status === status : true;
    const matchesMethod = method ? payment.method === method : true;
    const matchesDateRange =
      (!dateRange.start || new Date(payment.date) >= new Date(dateRange.start)) &&
      (!dateRange.end || new Date(payment.date) <= new Date(dateRange.end));
    return matchesSearch && matchesStatus && matchesMethod && matchesDateRange;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
  const currentPayments = filteredPayments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const handleBackToAdminPanel = () => {
    navigate("/admin"); // Navigate to the admin panel page
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg min-h-screen">
          <button
          onClick={handleBackToAdminPanel}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow"
        >
          Back to Admin Panel
        </button>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Payments</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all">
          Add Payment
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            name="dateRange.start"
            value={filters.dateRange.start}
            onChange={(e) =>
              setFilters({ ...filters, dateRange: { ...filters.dateRange, start: e.target.value } })
            }
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            name="dateRange.end"
            value={filters.dateRange.end}
            onChange={(e) =>
              setFilters({ ...filters, dateRange: { ...filters.dateRange, end: e.target.value } })
            }
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        <div>
          <label htmlFor="method" className="block text-sm font-medium text-gray-700 mb-1">
            Payment Method
          </label>
          <select
            name="method"
            value={filters.method}
            onChange={handleFilterChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">All Methods</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search by Transaction ID"
          value={filters.search}
          onChange={handleFilterChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      {/* Payment Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-3 border-b">Date</th>
              <th className="text-left px-6 py-3 border-b">Transaction ID</th>
              <th className="text-left px-6 py-3 border-b">Amount</th>
              <th className="text-left px-6 py-3 border-b">Status</th>
              <th className="text-left px-6 py-3 border-b">Payment Method</th>
              <th className="text-left px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPayments.map((payment, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{payment.date}</td>
                <td className="px-6 py-4">{payment.id}</td>
                <td className="px-6 py-4">{payment.amount}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-lg bg-${payment.statusColor}-100 text-${payment.statusColor}-600`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4">{payment.method}</td>
                <td className="px-6 py-4 flex gap-2">
                  <select
                    value={payment.status}
                    onChange={(e) => handleStatusChange(e, index)}
                    className="px-3 py-1 border rounded-lg"
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
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-l-lg disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-100">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-600 text-white rounded-r-lg disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentRecord;
