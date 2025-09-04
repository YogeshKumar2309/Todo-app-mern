// import Carousel from "../../components/homeSection/Crousel";
// import { FaSearch } from "react-icons/fa";
// import { searchItems } from "../../api/index.api";
// import { useEffect, useState } from "react";
// import { useTodos } from "../../context/TodosContext";


// const HomeSection = () => {
// //     const { setPage, limit, slides } = useTodos();

// //   const [query, setQuery] = useState("");
// //   const [results, setResults] = useState([]);





// //   useEffect(() => {
// //     const delayDebounce = setTimeout(() => {
// //       if (query.trim() !== "") {
// //         handleSearch(query);
// //       } else {
// //         setResults([]);
// //       }
// //     }, 400);

// //     return () => clearTimeout(delayDebounce);
// //   }, [query]);

// //   const handleSearch = async (text) => {
// //     const data = await searchItems(text);

// //     if (Array.isArray(data)) {
// //       setResults(data);
// //     } else {
// //       console.warn("Search returned non-arry:", data);
// //       setResults([]); //fallback
// //     }
// //   };

// // const handleOnclick = (item) => {
// //   if (item.isDone) {
// //     // ✅ Scroll to Done Section
// //     document.getElementById("done-section").scrollIntoView({ behavior: "smooth" });
// //   } else {
// //     // ✅ Scroll to Pending Section
// //     document.getElementById("pending-section").scrollIntoView({ behavior: "smooth" });

// //     // ✅ Set Page for Pending Section
// //     if (item.position !== undefined) {
// //       const pageNumber = Math.ceil((item.position + 1) / limit);
// //       setPage(pageNumber);
// //     }
// //   }

//   // ✅ Highlight the searched todo after DOM update
// //   setTimeout(() => {
// //     const element = document.getElementById(item._id);
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth", block: "center" });
// //       element.classList.add("bg-red-500");
// //       setTimeout(() => element.classList.remove("bg-red-500"), 2000);
// //     }
// //   }, 800);
// // };





//   return (
//     <div className="w-full max-w-2xl  lg:max-w-4xl mx-auto  ">
//       <div className="h-48 sm:h-64 md:h-72">

//         {/* Reduced height */}
//         <Carousel slides={slides} />
//       </div>
//       {/* <div className=" m-auto mt-10 flex justify-center items-center relative ">
//         <input
//           type="text"
//           placeholder="search todo here"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="bg-white h-8 rounded-2xl ps-3 pr-10 py-4 border-2 border-red-100 w-[50%]
//             outline-none font-sm text-sm 
//             shadow-[0_0_8px_2px_rgba(239,68,68,0.3)] 
//             focus:shadow-[0_0_12px_4px_rgba(239,68,68,0.4)]
//             transition-shadow duration-200"
//         />
//         <button
//           className="relative"
//           onClick={() => console.log("search clicked")}
//         >
//           <FaSearch className="text-gray-500 mr-3 text-2xl absolute right-0 -top-2.5" />
//         </button>        
//       </div> */}

//       {/* search section */}
//       {/* <div className=" w-full pb-6 flex justify-center m-auto mt-1 rounded-2xl relative">
//         <ul className="absolute top-1 w-[50%]">
//           {results.length > 0 ? (
//             results.map((item) => (
//               <li
//                 key={item._id}
//                 className="text-sm font-light text-ywDarkText opensans cursor mb-1 px-4 py-0.5 rounded-2xl bg-[#ddb1b135] cursor-pointer"
//                 onClick={() => handleOnclick(item)}
                
//               >
//                 {item.taskName}
                 

//               </li>
             
//             ))
//           ) : (
//             <li></li>
//           )}
//         </ul>
//         </div> */}
//     </div>
//   );
// };

// export default HomeSection;










import Carousel from "../../components/homeSection/Crousel";
import { FaSearch } from "react-icons/fa";
import { searchItems } from "../../api/index.api";
import { useEffect, useState } from "react";
import { useTodos } from "../../context/TodosContext";

const HomeSection = () => {
    const { setPage, limit, slides } = useTodos();
  return (
    <div className="w-full max-w-2xl  lg:max-w-4xl mx-auto">
      <div className="h-48 sm:h-64 md:h-72">
        {/* Reduced height */}
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default HomeSection;

