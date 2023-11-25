import { useState, useEffect } from "react";
import Link from "next/link";
import Logo  from "/img/logo.png";
import { Link as LinkScroll } from "react-scroll";

export const Header = () => {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setCurrentPage(currentPath);
  }, []);

  return (
    <header>
      <div className="container mx-auto block flex items-center justify-between text-white">
        <div className="flex items-center justify-center rounded-full">
          <Link href="/">
            <img
              className="mx-auto h-24 h-auto w-full rounded-full"
              id="imgLogo"
              style={{ width: 125, height: 125 }}
              src={Logo}
              alt="TPCP Admnistração"
            />
          </Link>
        </div>
        <div className=" hidden w-full items-center md:flex md:w-auto lg:block">
          <ul className="mb-4 mt-2 flex gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li>
              <Link
                href="/"
                className={`block cursor-pointer rounded py-2 pl-10 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/" ? "text-yellow-100" : ""
                }`}
                aria-current="page"
              >
                Principal
              </Link>
            </li>
            <li>
              <LinkScroll
                to="about"
                duration={500}
                exact="true"
                className={`block cursor-pointer rounded py-2 pl-10 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/calculadora" || currentPage === "/historico"
                    ? "pointer-events-none"
                    : ""
                }`}
              >
                Sobre nós
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="offices"
                duration={500}
                exact="true"
                className={`block cursor-pointer rounded py-2 pl-10 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/calculadora" || currentPage === "/historico"
                    ? "pointer-events-none"
                    : ""
                }`}
              >
                Escritórios
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="contact"
                duration={500}
                exact="true"
                className={`block cursor-pointer rounded py-2 pl-10 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/calculadora" || currentPage === "/historico"
                    ? "pointer-events-none"
                    : ""
                }`}
              >
                Contato
              </LinkScroll>
            </li>
            <li>
              <Link
                href="/calculadora"
                duration={500}
                exact="true"
                className={`block cursor-pointer rounded py-2 pl-10 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/calculadora" ? "text-yellow-100" : ""
                }`}
              >
                Calculadora
              </Link>
            </li>
            <li>
              <Link
                href="/historico"
                duration={500}
                exact="true"
                className={`block cursor-pointer rounded py-2 pr-4 text-white dark:border-gray-100 dark:text-white md:hover:text-yellow-100 ${
                  currentPage === "/historico" ? "text-yellow-100" : ""
                }`}
              >
                Histórico
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
