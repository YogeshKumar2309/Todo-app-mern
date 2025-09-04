import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AddTodoSection from "../pages/home/AddTodoSection";
import DoneTodosSection from "../pages/home/DoneTodosSection";
import AboutSection from "../pages/home/AboutSection";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import RouteLayout from "../layouts/RouteLayout";




const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="todos" element={<Todos />} /> */}
      <Route path="todos/addTodo" element={<AddTodoSection />} />
      {/* <Route path="todos/editTodo/:id" element={<EditTodo />} /> */}
      {/* <Route path="todos/todoDetail/:id" element={<TodoDetail />} /> */}
      <Route path="todos/doneTodos" element={<DoneTodosSection />} />
      {/* <Route path="todos/searchTodo/:id" element={<SearchTodo />} /> */}
      <Route path="about" element={<AboutSection />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default router;
