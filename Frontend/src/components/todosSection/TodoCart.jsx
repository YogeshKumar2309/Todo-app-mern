import { useEffect, useState } from "react";
import { updateTodoStatus, deleteTodo, editTodo as editTodoApi } from "../../api/index.api";


const TodoCart = ({ todo, fetchTodos ,editbtn }) => {
  const [checked, setChecked] = useState(todo.isDone);
  // const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [updatedTask, setUpdatedTask] = useState("");



  const handleCheckboxChange = async () => {
    const newStatus = !checked;
    setChecked(newStatus);

    try {
      const response = await updateTodoStatus(todo._id, newStatus);
      // console.log("completed update", response.updatedTask.isDone);
      fetchTodos();
      if (response.updatedTask.isDone) {
        alert("task done");
      } else {
        alert("task undone");
      }

    } catch (error) {
      alert("Failed to update todo status");
      console.log(error);
      setChecked(!newStatus)
    }
  };
  const checkboxId = `todo-${todo._id}`;

  const deteleHandle = async () => {
    try {
      console.log('id', todo._id);
      const deleteRes = await deleteTodo(todo._id);
      fetchTodos();
      console.log(deleteRes.data.message);
      alert(deleteRes.data.message);


    } catch (err) {
      console.log(err);
    }
  }

  const editTodoHandle = async (id, updatedTodo) => {
    console.log(id);
    
    const updatedTodoObj = {
      "taskName": updatedTodo 
    }

    console.log("updated todo", updatedTodoObj)
    try{
    const res = await editTodoApi(id, updatedTodoObj);
     fetchTodos(); //  list refresh
    setEditTodo(null);
    console.log("edit res", res);
    } catch(error) {
         console.error("Error updating todo:", error);
    }
  }



  return (
    <div
      className="bg-[#ab3b3b10] border-2 my-4 shadow-2xl shadow-[#2b1515] p-4 w-[200px] md:w-[200px]
          rounded-2xl 
          text-sm hover:bg-red-100
    "
      id={todo._id}
    >
      <div className="flex items-center text-[16px] font-bold">
        <input
          type="checkbox"
          className="mr-2"
          id={checkboxId}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <label
          htmlFor={checkboxId}
          className={`${checked ? "line-through text-gray-500" : ""}`}
        >
          {todo.taskName}
        </label>
      </div>
      <div>createdAt:{new Date(todo.createdAt).toLocaleDateString()}</div> {/*isme date hi dikhao chatgpt  */}



      {todo.isDone && (

        <div>
          done date: {new Date(todo.doneAt).toLocaleDateString()}
        </div>
      )}


      <div className="flex justify-between">
        {editbtn && <button className="bg-blue-500  py-0.5 px-1.5 rounded-lg hover:bg-blue-900"
          onClick={() => {setEditTodo(todo)
               setUpdatedTask(todo.taskName)}
          }>edit</button>
        }

        <button className={`bg-red-700 py-0.5 px-1.5 rounded-lg hover:bg-red-900 `}
          onClick={deteleHandle}
        >delete</button>
      </div>


      {editTodo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <input
              type="text"
                className="border p-2 w-full"
              value={updatedTask} // controlled input
              onChange={(e) => setUpdatedTask(e.target.value)}         
        
            />
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-400 px-4 py-2 mr-2 rounded"
                onClick={() => {
                  setEditTodo(null)
                 
                } }
                  // Close modal
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  editTodoHandle(editTodo._id, updatedTask)

                }}

              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}



    </div>

  );
};

export default TodoCart;

