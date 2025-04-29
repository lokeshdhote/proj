import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProgressTracker,
  updateProgressTracker,
  deleteProgressTracker,
  getworkspace,
} from "../../src/Store/Actions/VirtualspaceAction";

const ProgressTracker = ({ project }) => {
  const dispatch = useDispatch();
  const { virtualSpace, loading, error } = useSelector(
    (state) => state?.virtual
  ); // Get progress from the Redux state
  console.log(project, "sadad");

  const progressData = virtualSpace?.virtualspace?.progressTrackers;
  const [goal, setGoal] = useState("");
  const [parts, setParts] = useState([{ title: "", completed: false }]);
  const [showForm, setShowForm] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [errors, setErrors] = useState({ goal: "", parts: "" });
  const [toast, setToast] = useState(""); // Toast state
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted
  const [index, setindex] = useState("");
  const id = project?.workspace; // The id of the virtual space

  useEffect(() => {
    dispatch(getworkspace(id)); // Fetch progress if id is provided
  }, [id]);

  useEffect(() => {
    if (progressData && progressData.length > 0) {
      const tracker = progressData[0]; // Assume using the first tracker for simplicity
      setGoal(tracker.goal || "");
      setParts(tracker.parts || [{ title: "", completed: false }]);
      setIsSubmitted(true);
    }
  }, [progressData]);

  useEffect(() => {
    if (
      isSubmitted &&
      parts?.every((part) => part?.completed) &&
      parts?.length > 0
    ) {
      setShowCongratulations(true);
      setToast("🎉 You completed your goal! Congratulations!");
      setTimeout(() => setToast(""), 3000);
    } else {
      setShowCongratulations(false);
    }
  }, [parts, isSubmitted]);

  const handlePartChange = (index, e) => {
    const updatedParts = [...parts];
    updatedParts[index].title = e.target.value;
    setParts(updatedParts);
    setErrors({ ...errors, parts: "" });
  };

  const toggleCompletion = (index) => {
    if (!goal.trim()) {
      setErrors({
        ...errors,
        goal: "Please enter a goal before marking parts as complete.",
      });
      return;
    }
    if (index === 0 || parts[index - 1].completed) {
      const updatedParts = [...parts];
      updatedParts[index].completed = !updatedParts[index].completed;
      setParts(updatedParts);
    } else {
      setErrors({ ...errors, parts: `Complete part ${index} first!` });
    }
  };

  const deletePart = (index) => {
    const updatedParts = parts.filter((_, i) => i !== index);
    setParts(updatedParts);
    if (updatedParts.length === 0) {
      setErrors({ ...errors, parts: "" });
    }
  };

  const deleteProgress = () => {
    dispatch(deleteProgressTracker(id));
    setToast("Progress reset successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  const addPart = () => {
    if (parts.length > 0 && !parts[parts.length - 1].title.trim()) {
      setErrors({
        ...errors,
        parts:
          "Complete the title for the previous part before adding a new one.",
      });
    } else if (parts.length >= 6) {
      setErrors({ ...errors, parts: "You can add up to 6 parts only." });
    } else {
      const newPart = { title: "", completed: false };
      setParts([...parts, newPart]);
      setErrors({ ...errors, parts: "" });
    }
  };
  const handleupdate = (index) => {
    console.log(index + "p");

    const newErrors = {};
    if (!goal.trim()) newErrors.goal = "Goal is required.";
    if (!parts.every((part) => part.title.trim()))
      newErrors.parts = "All parts must have a title.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const progressInfo = { goal, parts };
    dispatch(updateProgressTracker(id, progressInfo)); // Dispatch update action
    setToast("Progress updated successfully!");
    setTimeout(() => setToast(""), 3000); // Clear toast after 3 seconds
    setShowForm(false);
    setErrors({ goal: "", parts: "" });
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!goal.trim()) newErrors.goal = "Goal is required.";
    if (!parts.every((part) => part.title.trim()))
      newErrors.parts = "All parts must have a title.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare the data to be sent in the request
    const progressInfo = { goal, parts };
    if (!isSubmitted) {
      dispatch(createProgressTracker(id, progressInfo));
      setToast("Progress created successfully!");
    }

    setTimeout(() => setToast(""), 3000); // Clear toast after 3 seconds
    setIsSubmitted(true); // Indicate progress is in update mode
    setShowForm(false);
    setErrors({ goal: "", parts: "" });
  };

  const progressPercentage = () => {
    const validParts = parts.filter((part) => part.title.trim());
    const completedParts = validParts.filter((part) => part.completed).length;
    return validParts.length > 0
      ? (completedParts / validParts.length) * 100
      : 0;
  };

  return (
    <div className="py-6 px-4">
      {toast && (
        <div className="mb-4 bg-green-500 text-white p-3 rounded-md text-center">
          {toast}
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Progress Bar</h2>
      <div className="p-10 h-[40vw] mb-5 bg-white shadow-md rounded-md max-w-3xl mx-auto overflow-y-auto">
        <div className="mb-6">
          <div className="relative pt-1 mb-6">
            <div className="flex mb-2 items-center justify-between">
              <span className="font-medium">Progress:</span>
              <span className="font-medium">
                {Math.round(progressPercentage())}%
              </span>
            </div>
            <div className="overflow-hidden h-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${progressPercentage()}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>

          <div className="flex mt-4 items-center justify-between">
            {parts
              .filter((part) => part.title.trim())
              .map((part, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      part.completed ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <span className="text-white font-bold">
                      {part.completed ? "✔" : index + 1}
                    </span>
                  </div>
                  <span className="mt-2 text-sm">{part.title}</span>
                </div>
              ))}
          </div>
          <div className="pt-7 w-full">
            <h3 className="text-xl text-black break-words">
              <span className="font-medium">Goals: </span>
              {goal}
            </h3>
          </div>
        </div>

        <div>
          {!showForm && (
            <div>
              {progressData && progressData.length > 0 ? (
                <button
                  onClick={() => setShowForm(true)}
                  className="p-3 bg-blue-600 text-white rounded-md w-full"
                >
                  Edit Progress
                </button>
              ) : (
                <button
                  onClick={() => setShowForm(true)}
                  className="p-3 bg-blue-600 text-white rounded-md w-full"
                >
                  Add Progress
                </button>
              )}
            </div>
          )}
        </div>

        {showForm && (
          <div className="mt-6">
            <div className="mb-6">
              <label className="font-medium mb-2 block" htmlFor="goal">
                Project Goal:
              </label>
              <input
                type="text"
                id="goal"
                className="border p-2 rounded-md w-full"
                placeholder="Enter your goal"
                value={goal}
                onChange={(e) => {
                  setGoal(e.target.value);
                  setErrors({ ...errors, goal: "" });
                }}
              />
              {errors.goal && (
                <p className="text-red-500 text-sm mt-1">{errors.goal}</p>
              )}
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">
                Divide into Parts (Max 6):
              </h3>
              {parts.map((part, index) => (
                <div key={index} className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder={`Part ${index + 1}`}
                    value={part.title}
                    onChange={(e) => handlePartChange(index, e)}
                    className="border p-2 rounded-md flex-grow mr-2"
                  />
                  <button
                    onClick={() => toggleCompletion(index)}
                    className={`p-2 rounded-md mx-1 ${
                      part.completed ? "bg-green-500" : "bg-gray-300"
                    }`}
                    disabled={
                      !goal.trim() ||
                      !part.title.trim() ||
                      (index > 0 && !parts[index - 1].completed)
                    }
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => deletePart(index)}
                    className="p-2 rounded-md bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </div>
              ))}
              {errors.parts && (
                <p className="text-red-500 text-sm">{errors.parts}</p>
              )}
            </div>
            <div className="flex justify-between mt-4 mb-4">
              <button
                onClick={addPart}
                className="p-2 bg-blue-500 text-white rounded-md"
              >
                Add Part
              </button>
              {isSubmitted ? (
                <button
                  onClick={() => handleupdate(parts.index)}
                  className="p-2 bg-yellow-500 text-white rounded-md"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="p-2 bg-green-500 text-white rounded-md"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;
