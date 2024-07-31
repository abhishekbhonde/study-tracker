// TaskModal.js
import React, { useState } from 'react';
import axios from 'axios';
const TaskModal = ({ isOpen, onClose, onAddTask }) => {
  const [task, setTask] = useState('');

  const HandleTask= async()=>{
    const response = await axios.post("http://localhost:3002/tasks/createstudytask",{
        task:task
    })
    console.log("task added", response.data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded mb-4"
            placeholder="Enter task..."
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button 
            onClick={HandleTask}
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
