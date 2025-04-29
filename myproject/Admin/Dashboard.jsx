import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-full bg-gray-50">
      {/* Sidebar Placeholder (if any) */}
      <div className='bg-[#196EAF] text-white py-3 flex items-center justify-start gap-[35vw] px-[4vw] mb-2'>
        {/* Back to Home arrow */}
        <NavLink    to={"/admin"} > <i class="ri-arrow-left-s-line  text-3xl font-[500]"> </i> </NavLink> 
        {/* <Link to="/" className='text-xl text-gray-800 flex items-center'>
       
        </Link> */}
        <h1 className='text-center text-2xl font-bold '>Dashboard</h1>
      </div>
      {/* Main Content */}
      <div className="flex-1 pt-24 px-6">
        {/* Top Header */}
        <div className="flex justify-between items-center mt-3 ml-2 mb-8">
          <h2 className="text-3xl font-bold text-gray-700">Dashboard</h2>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
            Add New
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Projects", value: 120, color: "text-blue-500", icon: "fas fa-project-diagram" },
            { label: "Earnings", value: "$12,300", color: "text-green-500", icon: "fas fa-dollar-sign" },
            { label: "New Clients", value: 25, color: "text-yellow-500", icon: "fas fa-users" },
            { label: "Pending Tasks", value: 8, color: "text-red-500", icon: "fas fa-tasks" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition-all`}
            >
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              </div>
              <div className={`${stat.color}`}>
                <i className={`${stat.icon} text-4xl`}></i>
              </div>
            </div>
          ))}
        </div>

        

        {/* Recent Activities Table */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Recent Activities</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-50 border rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="px-6 py-3 border-b font-medium">Date</th>
                  <th className="px-6 py-3 border-b font-medium">Activity</th>
                  <th className="px-6 py-3 border-b font-medium">Status</th>
                  <th className="px-6 py-3 border-b font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  { date: "2024-11-20", activity: "Payment Received", status: "Completed", color: "bg-green-100 text-green-600" },
                  { date: "2024-11-19", activity: "New Project Added", status: "In Progress", color: "bg-blue-100 text-blue-600" },
                  { date: "2024-11-18", activity: "Client Registered", status: "Pending", color: "bg-yellow-100 text-yellow-600" },
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100 transition-all">
                    <td className="px-6 py-4">{row.date}</td>
                    <td className="px-6 py-4">{row.activity}</td>
                    <td className="px-6 py-4">
                      <span className={`text-sm px-2 py-1 rounded-lg ${row.color}`}>{row.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-500 hover:underline">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
