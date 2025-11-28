import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navItems = [
    { name: "Home", href: "/", label: "Inicio" },
    { name: "About", href: "/about", label: "Sobre mi" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-10 left-7 z-10 text-3xl transition-all duration-200 transform hover:scale-200 hover:rotate-180"
      >
        z
      </button>

      <Transition
        show={isOpen}
        enter="transition-all duration-300"
        enterFrom="opacity-0 backdrop-blur-none"
        enterTo="opacity-100 backdrop-blur-sm"
        leave="transition-all duration-300"
        leaveFrom="opacity-100 backdrop-blur-sm"
        leaveTo="opacity-0 backdrop-blur-none"
      >
        <div className="fixed inset-0 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      </Transition>

      <Transition
        show={isOpen}
        enter="transition-transform duration-300 ease-out"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300 ease-in"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <aside className="fixed left-0 top-0 h-full w-64 md:w-120 bg-[#10181f] z-40 p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl my-4 transition-all duration-200 transform hover:scale-200 hover:rotate-180"
          >
            ×
          </button>
          <nav className="text-[2em] md:text-[3em] mt-30">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block max-h-14 transition-all duration-200 ease-out relative
                  after:content-[''] after:absolute after:bottom-0 after:left-4
                  after:h-1 after:rounded-full after:bg-[#00a4d6] after:w-0
                  after:transition-all after:duration-350 after:ease-in-out
                  hover:text-[#00a4d6] hover:pl-5 hover:after:w-60 ${
                    currentPath === item.href ? "pl-3 text-[#00a4d6]" : ""
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="absolute w-full bottom-10 left-0">
            <div className="flex justify-center space-x-10 ">
              <a
                href="https://www.behance.net/diegogonzale50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="max-w-10 transition-all duration-200 ease-in-out transform hover:scale-110 hover:rotate-12 hover:drop-shadow-[0_10px_10px_rgba(0,164,214,0.5)]"
                  src="/behance.svg"
                  alt="Behance icon"
                />
              </a>

              <a href="https://github.com/Alejo-gole" target="_blank" rel="noopener noreferrer">
                <img
                  className="max-w-8 transition-all duration-200 ease-in-out transform hover:scale-110 hover:rotate-12 hover:drop-shadow-[0_10px_10px_rgba(0,164,214,0.5)]"
                  src="/github.svg"
                  alt="gitHub icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alejo-gole/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="max-w-8 transition-all duration-200 ease-in-out transform hover:scale-110 hover:rotate-12 hover:drop-shadow-[0_10px_10px_rgba(0,164,214,0.5)]"
                  src="/linkedin.svg"
                  alt="LinkedIn icon"
                />
              </a>
            </div>
          </div>
        </aside>
      </Transition>
    </>
  );
}
