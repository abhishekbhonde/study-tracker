// Tasks.js
import React, { useEffect, useState } from "react";
import TaskModal from "./TaskModel"; // Ensure this path is correct
import axios from "axios";

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3002/tasks/gettasks");
        setTaskList(response.data.tasks); // Access tasks from the response
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/tasks/deletetask/${id}`);
      const updatedTasks = taskList.filter((task) => task._id !== id);
      console.log('Updated task list:', updatedTasks); // Check if state updates correctly
      setTaskList(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  

  return (
    <div className="flex flex-col items-center mt-[100px] px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Make your life easy <br /> by managing tasks here
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Add tasks here to streamline your day <br /> and stay organized. Make
          your life easier and <br /> more productive with a clear to-do list.
        </p>
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
        >
          Add Task
        </button>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddTask={handleAddTask}
      />

      <ul className="mt-8 w-full max-w-lg">
        {taskList.length > 0 ? (
          taskList.map((task) => (
            <li
              key={task.id}
              className="border rounded-lg shadow-md mb-4 p-4 bg-white flex justify-between items-center transition duration-300 ease-in-out"
            >
              <p className="text-lg font-semibold text-gray-800">{task.task}</p>
              <button
                onClick={() => handleDeleteTask(task._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No tasks available
          </p>
        )}
      </ul>
    </div>
  );
};

export default Tasks;
