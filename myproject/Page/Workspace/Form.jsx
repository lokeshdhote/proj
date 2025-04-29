import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateCalender } from "../../src/Store/Actions/VirtualspaceAction";

const Form = ({ project, setIsModalOpen }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState({});

  const id = project.workspace; // Workspace ID passed as a prop

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Event title is required.";
    if (!description) newErrors.description = "Event description is required.";
    if (!startDate) newErrors.startDate = "Start time is required.";
    if (!endDate) newErrors.endDate = "End time is required.";
    if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
      newErrors.time = "End time must be after start time.";
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(CreateCalender(id, { name, description, startDate, endDate }));

    // Clear form fields and errors after successful dispatch
    setErrors({});
    setName("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h4 className="font-medium text-xl text-gray-800 mb-4">Add New Event</h4>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Event Title *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}

        <div className="flex items-center space-x-4">
          <div className="w-full">
            <h6 className="font-medium text-gray-700">Start Time *</h6>
            <input
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="w-full p-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
          </div>
          <div className="w-full">
            <h6 className="font-medium text-gray-700">End Time *</h6>
            <input
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="w-full p-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
            {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-all duration-300"
          >
            Add Event
          </button>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
