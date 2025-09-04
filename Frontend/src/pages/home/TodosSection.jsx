// import TodoCart from "../../components/todosSection/TodoCart"
import { useEffect, useState } from "react";
import { todoLists } from "../../api/index.api.js";
import TodoCart from "../../components/todosSection/TodoCart.jsx";
import { useTodos } from "../../context/TodosContext";



const TodosSection = () => {
  const { page, setPage, limit, setLimit, refreshTrigger } = useTodos();
  const [todos, setTodos] = useState([]);
  // const [page, setPage] = useState(1);//current page
  const [totalPages, setTotalPages] = useState(1);
  // const [limit, setLimit] = useState(4);//todo par page


  const fetchTodos = async () => {
    const status = 'pending'
    try {
      const response = await todoLists(page, limit, status);
      setTodos(response.tasks || []);
      console.log(response.tasks, "this is res")
      const countTotalPage = Math.ceil(response.total / limit);
      setTotalPages(countTotalPage || 1);
    } catch (error) {
      console.error("Error fetching todos:", error);
      setTodos([]); // fallback to empty list
    }
  };



  useEffect(() => {
    fetchTodos();
  }, [page, limit, refreshTrigger]);



  return (
    <>
      <h1 className="text-center text-xl font-bold text-ywDarkText pt-2">
        Your Pending todo
      </h1>
      {todos.length > 0 ? (
        <div id="pending-section" className=" w-[80vw] max-w-5xl bg-ywSoft m-auto mt-2 rounded-2xl flex flex-wrap overflow-hidden gap-6 justify-between px-10 py-6">
          {todos
              .map((todo) => (
              <TodoCart todo={todo} key={todo._id} fetchTodos={fetchTodos} editbtn={true}/>
            ))}
        </div>
      ) : (
        <p className="text-center w-full text-gray-600 text-lg">
          ✅ No todos available! Add your first todo.
        </p>
      )}

      {/* pagination controls */}
      {todos.length > 0 && (
        <div className="flex items-center justify-between w-[80vw] max-w-5xl mx-auto mt-4 px-8 py-2 bg-white shadow-md rounded-xl gap-3 flex-wrap">
          {/* Prev Button */}
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`px-3 sm:px-4 py-2 rounded-lg text-white font-medium transition text-sm sm:text-base ${page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
              }`}
          >
            Prev
          </button>

          {/* Page Info */}
          <h2 className="text-gray-700 font-semibold text-sm sm:text-base">
            Page <span className="text-red-500">{page}</span> of{" "}
            <span className="text-red-500">{totalPages}</span>
          </h2>

          {/* Limit Selector (Only on Desktop) */}
          <div className="hidden sm:block">
            <select
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setPage(1);
              }}
              className="border border-gray-300 rounded-lg px-3 py-1 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value={4}>4 per page</option>
              <option value={8}>8 per page</option>
            </select>
          </div>

          {/* Next Button */}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className={`px-3 sm:px-4 py-2 rounded-lg text-white font-medium transition text-sm sm:text-base ${page === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
              }`}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default TodosSection;

