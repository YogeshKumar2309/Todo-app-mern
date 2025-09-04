import { createContext, useContext, useState } from "react";
import img from "../assets/bg3.jfif";
import img2 from "../assets/bg2.jfif";
import img3 from "../assets/bg.jfif";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [refreshTrigger, setRefreshTrigger] = useState(0);


  // ✅ Slides Data
  const slides = [
    {
      id: 1,
      bgColor: "bg-[#9ECAD6]",
      bgImg: img,
      component: (
        <div className="w-full max-w-xs sm:max-w-md px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl shadow-md bg-white/95">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2b2b2b] mb-1 sm:mb-2">
            📝 Your Tasks Today
          </h2>
          <ul className="text-[#2b2b2b] text-sm sm:text-base list-disc ml-4 sm:ml-5 space-y-0.5 sm:space-y-1">
            <li>Buy groceries</li>
            <li>Complete React assignment</li>
            <li>Call Mom</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      bgColor: "bg-[#74A8D4]",
      bgImg: img2,
      component: (
        <div className="w-full max-w-xs sm:max-w-md px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl shadow-md bg-white/95">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2b2b2b] mb-1 sm:mb-2">
            📊 Task Progress
          </h2>
          <div className="bg-[#FFEAEE] rounded-full h-2 sm:h-3 mb-1 sm:mb-2">
            <div
              className="bg-[#F5CBCB] h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: "65%" }}
            ></div>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#2b2b2b]">
            3 of 5 tasks completed
          </p>
        </div>
      ),
    },
    {
      id: 3,
      bgColor: "bg-[#F5CBCB]",
      bgImg: img3,
      component: (
        <div className="w-full max-w-xs sm:max-w-md px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl shadow-md bg-white/95">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2b2b2b] mb-1 sm:mb-2">
            ✅ Completed Tasks
          </h2>
          <ul className="text-[#2b2b2b] text-sm sm:text-base list-disc ml-4 sm:ml-5 space-y-0.5 sm:space-y-1">
            <li>Water the plants</li>
            <li>Pay electricity bill</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <TodosContext.Provider value={{ page, setPage, limit, setLimit, slides , refreshTrigger, setRefreshTrigger}}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within TodosProvider");
  }
  return context;
};


