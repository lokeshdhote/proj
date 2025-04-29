import React, { useState } from "react";
import Form from "./Form";
import Displayevent from "./Displayevent";

const TaskManagement = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-white">
      <div className="w-[98%] bg-white p-6 flex items-center justify-between shadow-md shadow-gray-400 rounded-md mx-auto mt-4">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Calendar</h2>
          <p className="text-lg text-gray-600 mb-6">
            Stay on top of your tasks! Mark your upcoming events and never miss a deadline.
          </p>
        </div>

        {/* Add New Event Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          Add New Event
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Form project={project} setIsModalOpen={setIsModalOpen} />
          </div>
        )}
      </div>

      {/* Display Events Section */}
      <div className="w-[98%] bg-white shadow-md shadow-gray-400 rounded-md mx-auto mt-6 mb-4 p-4 h-[80%] overflow-y-auto">
        <Displayevent project={project} />
      </div>
    </div>
  );
};

export default TaskManagement;
