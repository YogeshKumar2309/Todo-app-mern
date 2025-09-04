
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
import { TodosProvider } from "./context/TodosContext.jsx";

const App = () => {
  return (
  <TodosProvider>
     <RouterProvider router={router} />
  </TodosProvider>
);
};

export default App;

// import React from "react";

// export default function App() {
//   return (
//     <div className="app" style={{
//       backgroundColor: '#FFF8E1',
//       minHeight: '100vh',
//       color: '#333333'
//     }}>
//       {/* Navbar */}
//       <nav style={{
//         backgroundColor: '#1E3A8A',
//         color: '#FFFFFF',
//         padding: '1rem',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//       }}>
//         <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>MyTodo</h1>
//         <div style={{ display: 'flex', gap: '1rem' }}>
//           <button style={{ background: 'none', border: 'none', color: 'inherit' }}>Home</button>
//           <button style={{ background: 'none', border: 'none', color: 'inherit' }}>About</button>
//           <button style={{ background: 'none', border: 'none', color: 'inherit' }}>Login</button>
//         </div>
//       </nav>

//       {/* Carousel */}
//       <section style={{ margin: '1.5rem 1rem' }}>
//         <div style={{
//           display: 'flex',
//           overflowX: 'auto',
//           scrollSnapType: 'x mandatory',
//           borderRadius: '0.75rem',
//           gap: '1rem'
//         }}>
//           {['Stay+Productive', 'Organize+Tasks', 'Get+Things+Done'].map((text, index) => (
//             <img 
//               key={index}
//               src={`https://via.placeholder.com/800x300?text=${text}`}
//               alt={`Slide ${index + 1}`}
//               style={{
//                 scrollSnapAlign: 'start',
//                 flex: '0 0 auto',
//                 width: '100%',
//                 borderRadius: '0.75rem'
//               }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Search */}
//       <section style={{ padding: '0 1rem', marginBottom: '1.5rem' }}>
//         <input
//           type="text"
//           placeholder="Search your tasks..."
//           style={{
//             maxWidth: '32rem',
//             margin: '0 auto',
//             display: 'block',
//             width: '100%',
//             padding: '0.5rem 1rem',
//             borderRadius: '0.375rem',
//             border: '1px solid #D1D5DB'
//           }}
//         />
//       </section>

//       {/* Todo Cards */}
//       <section style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//         gap: '1.5rem',
//         padding: '0 1rem',
//         marginBottom: '2.5rem'
//       }}>
//         {[1, 2, 3].map((todo) => (
//           <div key={todo} style={{
//             backgroundColor: '#FFFFFF',
//             color: '#333333',
//             padding: '1rem',
//             borderRadius: '0.5rem',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//           }}>
//             <h2 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Todo Title {todo}</h2>
//             <p style={{ fontSize: '0.875rem' }}>This is a brief description of the todo task number {todo}.</p>
//             <button style={{
//               marginTop: '1rem',
//               backgroundColor: '#F59E0B',
//               color: '#333333',
//               border: 'none',
//               padding: '0.5rem 1rem',
//               borderRadius: '0.375rem',
//               cursor: 'pointer'
//             }}>View</button>
//           </div>
//         ))}
//       </section>

//       {/* About Section */}
//       <section style={{
//         backgroundColor: '#F59E0B',
//         padding: '1.5rem',
//         textAlign: 'center',
//         color: '#333333'
//       }}>
//         <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>About MyTodo</h2>
//         <p style={{ maxWidth: '42rem', margin: '0 auto' }}>
//           MyTodo helps you organize your daily tasks efficiently. With a clean and intuitive interface, you can add, view, and track todos easily. Built using modern technologies and styled with a beautiful color palette.
//         </p>
//       </section>

//       {/* Footer */}
//       <footer style={{
//         backgroundColor: '#1E3A8A',
//         color: '#FFFFFF',
//         padding: '1rem',
//         textAlign: 'center'
//       }}>
//         &copy; 2025 MyTodo App. All rights reserved.
//       </footer>
//     </div>
//   );
// }
