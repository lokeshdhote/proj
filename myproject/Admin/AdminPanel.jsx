import React from "react";
import { NavLink } from "react-router-dom";

const AdminPanel = () => {
  return (




    <div className="w-[100%] h-screen bg-white">

<div className="w-[100%] h-[5vw]  " ></div>
<div className="w-[100%] h-[48vw] flex ">
<div className="w-[20%] h-[48vw] bg-[#196eaf] text-bold">
<div className="p-6 text-center font-bold text-2xl text-[#d4d8dd]  bg-[#196eaf]">Freelance Admin</div>
        <nav className="mt-6 text-bold  bg-[#196eaf]">
          {[
            { to: "/admin/freelancer", label: "Freelancers" },
            { to: "/admin/client", label: "Clients" },
            { to: "/admin/project", label: "Projects" },
            // { to: "/admin/community", label: "Community", icon: "📂" },
            { to: "/admin/payment", label: "Payments"},
            { to: "/admin/reports", label: "Report" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex items-center px-4 py-3  bg-[#196eaf] text-xl  text-white  font-bold rounded transition-colors duration-300"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="ml-4">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto p-4 border-t border-[#1a2d42]">
          <button className="w-full bg-[#d4d8dd] text-[#1a2d42] py-2 rounded hover:bg-[#b4c1c9] transition-colors duration-300">
            Logout
          </button>
        </div>
          </div>
<div className="w-[80%] h-full ">
<div className="flex-1 flex flex-col bg-[#f4f7fb] rounded-tl-2xl">
        {/* Navbar */}
    

        {/* Dashboard Cards */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Freelancers",
                total: 5450,
                verified: 4200,
                unverified: 1250,
              },
              {
                title: "Clients",
                total: 3240,
                verified: 2800,
                unverified: 440,
              },
              {
                title: "Projects",
                total: 1120,
                completed: 850,
                uncompleted: 270,
              },
              {
                title: "Revenue",
                value: "$142,350",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <h2 className="text-[#f4f7fb] text-sm">{item.title}</h2>
                {item.title === "Revenue" ? (
                  <p className="text-3xl font-bold text-[#f4f7fb] mt-2">
                    {item.value}
                  </p>
                ) : item.title === "Projects" ? (
                  <div>
                    <p className="text-3xl font-bold text-[#f4f7fb] mt-2">
                      {item.total}
                    </p>
                    <div className="mt-2 text-sm text-[#f4f7fb]">
                      <p>Completed: {item.completed}</p>
                      <p>Uncompleted: {item.uncompleted}</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-3xl font-bold text-[#f4f7fb] mt-2">
                      {item.total}
                    </p>
                    <div className="mt-2 text-sm text-[#f4f7fb]">
                      <p>Verified: {item.verified}</p>
                      <p>Unverified: {item.unverified}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
</div>
</div>

    </div>
    </div>
    )
  }
export default AdminPanel;
