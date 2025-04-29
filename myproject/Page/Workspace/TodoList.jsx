import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, getworkspace, UpdateTodo } from "../../src/Store/Actions/VirtualspaceAction";

const TodoList = ({ project }) => {
  const {client}= useSelector((state)=>state?.Auth)
  const id = project?.workspace; // Workspace ID
  const { virtualSpace, loading, error } = useSelector((state) => state?.virtual);
  const tasks = virtualSpace?.virtualspace?.todos || []; // Get tasks from Redux state

  const dispatch = useDispatch();

  const [taskName, settaskName] = useState("");
  const [description, setdescription] = useState("");
  const [editTaskId, setEditTaskId] = useState(null); // For editing a task
  const [errors, setErrors] = useState("");

  // Fetch workspace details when component mounts or ID changes
  useEffect(() => {
    if (id) {
      dispatch(getworkspace(id));
    }
  }, [dispatch, id]);

  // Add Task Handler
  const handleAddTask = async () => {
    let hasError = false;
    let newErrors = { taskName: "", description: "" };

    if (!taskName.trim()) {
      newErrors.taskName = "Title is required";
      hasError = true;
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    const newTask = { taskName, description, status: "Pending" };

    try {
      await dispatch(addTodo(id, newTask)); // Dispatch action to add task
      settaskName("");
      setdescription("");
      setErrors("");

      // Re-fetch workspace to ensure consistency
      dispatch(getworkspace(id));
    } catch (error) {
      console.error("Failed to add task:", error);
      dispatch(getworkspace(id)); // Re-fetch if error
    }
  };

  // Edit Task Handler
  const handleEditTask = (task) => {
    setEditTaskId(task._id); // Set the task ID to identify which task is being edited
    settaskName(task.taskName);
    setdescription(task.description);
    console.log(task);
  };

  // Update Task Handler
  const handleUpdateTask = async () => {
    let hasError = false;
    let newErrors = { taskName: "", description: "" };

    if (!taskName.trim()) {
      newErrors.taskName = "Title is required";
      hasError = true;
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    const updatedTask = { taskName, description };

    try {
      console.log(updatedTask);

      await dispatch(UpdateTodo(id, editTaskId, updatedTask)); // Dispatch action to update task
      setEditTaskId(null); // Clear the editing state
      settaskName("");
      setdescription("");
      setErrors("");

      // Re-fetch workspace to ensure consistency
      dispatch(getworkspace(id));
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  // Complete Task Handler
  const handleCompleteTask = async (task) => {
    try {
      const updatedTask = { status: "Completed" };
      await dispatch(UpdateTodo(id, task._id, updatedTask)); // Update task status to completed
      dispatch(getworkspace(id)); // Re-fetch after completing
    } catch (error) {
      console.error("Failed to complete task:", error);
    }
  };

  // Delete Task Handler
  const handleDeleteTask = async (taskId) => {
    try {
      await dispatch(deleteTodo(id, taskId)); // Dispatch delete action
      dispatch(getworkspace(id)); // Re-fetch after deleting
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <div className="h-screen">
      <h2 className="text-2xl font-semibold mb-4">Project To-Do List</h2>

      <div className="flex-1 bg-white p-4 shadow-md">
        {/* Task Input Panel */}
       { !client?._id === project?.client?._id && <div className="flex items-center mb-4">
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Task Title"
              value={taskName}
              onChange={(e) => settaskName(e.target.value)}
              className="border w-[20vw] p-2 rounded-md mr-2 flex-1"
            />
          </div>
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="border w-[45vw] p-2 rounded-md flex-1 mr-2"
            />
          </div>
          <button
            onClick={editTaskId ? handleUpdateTask : handleAddTask} // Use update if editing
            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
          >
            {editTaskId ? "Update Task" : "Add Task"} {/* Toggle button text */}
          </button>
        </div>}

        {/* Incomplete Tasks */}
        {/* Incomplete Tasks */}
<div>
  <h3 className="text-lg font-semibold mb-2">Incomplete Tasks</h3>
  {tasks.filter((task) => task.status === "Pending").length === 0 ? (
    <p className="text-gray-500">No incomplete tasks. Create a task!</p>
  ) : (
    <ul>
      {tasks
        .filter((task) => task.status === "Pending")
        .map((task) => (
          <li
            key={task._id}
            className="mb-4 p-4 bg-gray-100 rounded-md shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{task?.taskName}</h3>
                <p className="text-sm text-gray-500">{task?.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEditTask(task)} // Enable editing
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleCompleteTask(task)} // Complete task
                  className="bg-green-500 text-white px-3 py-1 rounded-md"
                >
                  Complete
                </button>
                <button
                  onClick={() => handleDeleteTask(task?._id)} // Delete task
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  )}
</div>

{/* Completed Tasks */}
<div>
  <h3 className="text-lg font-semibold mb-2">Completed Tasks</h3>
  {tasks.filter((task) => task.status === "Completed").length === 0 ? (
    <p className="text-gray-500">No completed tasks. Create a task!</p>
  ) : (
    <ul>
      {tasks
        .filter((task) => task.status === "Completed")
        .map((task) => (
          <li
            key={task._id}
            className="mb-4 p-4 bg-gray-100 rounded-md shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold line-through">
                  {task?.taskName}
                </h3>
                <p className="text-sm text-gray-500">{task?.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDeleteTask(task?._id)} // Delete task
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  )}
</div>

      </div>
    </div>
  );
};

export default TodoList;
