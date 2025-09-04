import React, { useEffect, useState } from 'react';
import AddTodo from '../../components/AddTodoSection/AddTodo';
import { addTodoApi, todoLists } from '../../api/index.api';
import { useTodos } from "../../context/TodosContext";


const AddTodoSection = () => {
  const { setRefreshTrigger } = useTodos();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, [])

  const fetchTodos = async () => {
    try {
      await todoLists(1, 4)//page = 1, limit = 4  
    } catch (error) {
      console.error("Error fetching todos:", error)
    }
  }

  const handleAddTodo = async (taskName) => {
    console.log("Task recieved from model:", taskName);

    if (!taskName.trim()) {
      console.warn("Task name is empty, skipping.....")
      return;
    }

    taskName = taskName.trim();
    try {
      const res = await addTodoApi(taskName);
      console.log("API res", res.data);

      fetchTodos();
      setRefreshTrigger(prev => prev + 1);
      alert(res.data.message)
      setShowModal(false);
    } catch (error) {
      console.error("Error is API call", error);
    }
  }


  return (
    <div
      className="relative flex flex-col justify-center items-center p-6 h-[60vh] w-full overflow-hidden"
      style={{
        backgroundImage: 'url(/bodybg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white drop-shadow-xl">
          Organize Your Life
        </h1>

        {/* Blue Add Todo Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-transform duration-200 hover:scale-105"
        >
          <span className="flex items-center justify-center">
            <svg
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add Todo
          </span>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl">
            <AddTodo
              onClose={() => setShowModal(false)}
              onAdd={handleAddTodo}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTodoSection;




