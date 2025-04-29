import React, { useState } from "react";
import { FaHome, FaTasks, FaCog, FaUserAlt, FaChartBar, FaFileAlt } from "react-icons/fa"; // Import more icons

const Sidebar = ({ components, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item); // Call the parent function
  };

  return (
    <div className="w-full  min-h-screen bg-[#196eaf] text-white shadow-lg">
      <div className="py-2 px-4 flex items-center justify-center pt-8 ">
        <h2 className="text-2xl font-semibold text-white">Workspace</h2>
      </div>

      <ul className="space-y-5 mt-5 px-4">
        {components.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleSelect(item)}
              className={`flex items-center space-x-4 py-2 px-4 rounded-lg  transition-all duration-300
                ${selectedItem === item ? 'bg-indigo-500 text-white' : 'text-gray-200'}`}
            >
              {/* Using Icons */}
              <span className="text-lg">
                {item.icon || <FaHome />}
              </span>
              <span className="text-lg font-medium truncate">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

    
    </div>
  );
};

export default Sidebar;
