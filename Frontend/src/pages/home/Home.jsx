// // import React from "react";

import AboutSection from "./AboutSection";
import AddTodoSection from "./AddTodoSection";
import DoneTodosSection from "./DoneTodosSection";
import TodosSection from "./TodosSection";
import HomeSection from "./HomeSection";



const Home = () => {
  return (
    <div   className="
  bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300


">
      <section id="home" className="  scroll-mt-14  "  >
        {<HomeSection />}
      </section>
      <hr className=" w-1"/>
      <section id="todos" className=" scroll-mt-14 my-9">
        {<TodosSection/>}
      </section>
       <hr className="bg-white w-0.5"/>
      <section id="addTodo" className=" h-[60vh] scroll-mt-14 my-9">
        {<AddTodoSection />}
      </section>
      <section id="doneTodos" className="scroll-mt-16 my-9">
        {<DoneTodosSection />}
      </section>
      <section id="about" className="scroll-mt-14 my-9">
        {<AboutSection />}
      </section>
    </div>
  );
};

export default Home;
