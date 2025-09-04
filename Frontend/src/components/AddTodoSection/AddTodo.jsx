


import React, { useState } from 'react';

const AddTodo = ({ onClose, onAdd }) => {
  const [task, setTask] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Add Task</h2>
        <input
          type="text"
          className="border p-2 w-full"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-400 px-4 py-2 mr-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => onAdd(task)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
