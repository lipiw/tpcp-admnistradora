import React, { useState, useEffect } from "react";
import { Navbar as MTNavbar } from "@material-tailwind/react";
import { Link } from "react-scroll";

export function Navbar() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setCurrentPage(currentPath);
  }, []);

  return (
    <MTNavbar color="transparent" className="block p-3">
      <div className="container mx-auto block flex items-center justify-between text-white">
        <div className="flex items-center justify-center rounded-full">
          <img
            className="mx-auto h-24 h-auto w-full rounded-full"
            id="imgLogo"
            style={{ width: 125, height: 125 }}
            src="img/logo.png"
            alt="TPCP Admnistração"
          />
        </div>
        <div className=" hidden w-full items-center md:flex md:w-auto lg:block">
          <ul className="mb-4 mt-2 flex gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li>
              <a
                href="/"
                className={`block cursor-pointer rounded py-2 pl-6 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/" ? "text-yellow-100" : ""
                }`}
                aria-current="page"
              >
                Principal
              </a>
            </li>
            <li>
              <Link
                to="about"
                duration={500}
                exact="true"
                className={`block cursor-pointer rounded py-2 pl-6 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/calculadora" || currentPage === "/historico" ? "pointer-events-none" : ""
                }`}
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                to="offices"
                duration={500}
                exact="true"
                className={`block cursor-pointer rounded py-2 pl-6 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/calculadora" || currentPage === "/historico" ? "pointer-events-none" : ""
                }`}
              >
                Escritórios
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                duration={500}
                exact="true"
                className={`block cursor-pointer rounded py-2 pl-6 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/calculadora" || currentPage === "/historico" ? "pointer-events-none" : ""
                }`}
              >
                Contato
              </Link>
            </li>
            <li>
              <a
                href="/calculadora"
                duration={500}
                exact="true"
                className={`block ml-44 cursor-pointer rounded py-2 pl-10 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/calculadora" ? "text-yellow-100" : ""
                }`}
              >
                Calculadora
              </a>
            </li>
            <li>
              <a
                href="/historico"
                duration={500}
                exact="true"
                className={`block cursor-pointer rounded py-2 pr-4 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/historico" ? "text-yellow-100" : ""
                }`}
              >
                Histórico
              </a>
            </li>
          </ul>
        </div>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
