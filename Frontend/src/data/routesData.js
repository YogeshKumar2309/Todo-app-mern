const routesData = [
  { path: "/#home", label: "Home", show: true },
  { path: "/#todos", label: "Todos", show: true },
  { path: "/#addTodo", label: "Add Todo", show: true },
  { path: "/#doneTodos", label: "Done Todos", show: true },
  { path: "/#about", label: "About", show: true },

  // Hidden routes (जिन्हें Navbar में नहीं दिखाना)
  { path: "/todos/editTodo/:id", label: "Edit Todo", show: false },
  { path: "/todos/todoDetail/:id", label: "Todo Detail", show: false },
  { path: "/todos/searchTodo/:id", label: "Search Todo", show: false },
];

export default routesData;
