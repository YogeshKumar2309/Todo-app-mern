import { HashLink } from "react-router-hash-link";
import routesData from "../data/routesData";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open/close state
  const [activeSection, setActiveSection] = useState(""); // store currently visible section id

  const toggleMenu = () => setIsOpen((prev) => !prev); // toggle mobile menu

  // 👇 INTERSECTION OBSERVER: active section track karne ke liye
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log(entry.target.id);
            setActiveSection(entry.target.id); // section dikha to uska ID store kar lo
            
          }
        });
      },
      {
        threshold: 0.6, // jab section 60% viewport mein ho, tab usse active mana jayega
      }
    );

    const sections = document.querySelectorAll("section[id]"); // sabhi sections jinke paas id hai
    sections.forEach((section) => observer.observe(section)); // sab pe observer lagao

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // cleanup on unmount
    };
  }, []);

  return (
    <div className="h-15 ">
      <nav className="text-base bg-ywPrimary fixed top-0 left-0 w-full flex justify-between items-center ps-5 pr-8 h-15 z-50 ">
        <div className="text-xl font-bold text-blue-900">YogeshWebDev</div>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex ">
          {routesData
            .filter((route) => route.show)
            .map((route, index) => {
              const sectionId = route.path.split("#")[1];
              return(
              <li key={index}>
                <HashLink smooth to={route.path} className={` sm:text-sm mx-2 md:text-[16px] md:mx-4 ${
                        activeSection === sectionId
                          ? "font-bold text-red-700" // 👈 active section ke liye highlight
                          : ""
                      }`}>
                  {route.label}
                </HashLink>
              </li>
            );
            })}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="sm:hidden text-5xl text-blue-900"
          style={{ zIndex: 1000 }}
          onClick={toggleMenu}
        >
          {isOpen ? "x" : "≡"}
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`fixed top-0 right-0 w-55 bg-ywNav shadow-2xl transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } sm:hidden`}
          style={{ zIndex: 100 }}
        >
          <ul className="list-none sm:hidden flex-col py-2 ps-2">
            {routesData
              .filter((route) => route.show)
              .map((route, index) => {
                // 👇 yahan se sectionId milta hai
                // agar path = "/#about", to sectionId = "about"
                const sectionId = route.path.split("#")[1];

                return (
                  <li key={index}>
                    <HashLink
                      smooth
                      to={route.path}
                      className={` my-2 ps-2 py-1 block w-40 ${
                        activeSection === sectionId
                          ? "font-bold text-red-700" // 👈 active section ke liye highlight
                          : ""
                      }`}
                    >
                      {route.label}
                    </HashLink>
                  </li>
                );
              })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
