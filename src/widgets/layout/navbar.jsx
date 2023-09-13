import React from "react";
import { Navbar as MTNavbar } from "@material-tailwind/react";
import { Link } from "react-scroll";

export function Navbar() {
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
              <Link
                to="#"
                className="pointer-events-none block rounded bg-yellow-100 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-yellow-100 md:dark:text-yellow-100"
                aria-current="page"
              >
                Principal
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="block cursor-pointer rounded py-2 pl-3 pr-4 text-white hover:bg-gray-100 dark:border-gray-100 dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-yellow-100 md:dark:hover:bg-transparent md:dark:hover:text-yellow-100"
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                to="offices"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="block cursor-pointer rounded py-2 pl-3 pr-4 text-white hover:bg-gray-100 dark:border-gray-100 dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-yellow-100 md:dark:hover:bg-transparent md:dark:hover:text-yellow-100"
              >
                Escritórios
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="block cursor-pointer rounded py-2 pl-3 pr-4 text-white hover:bg-gray-100 dark:border-gray-100 dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-yellow-100 md:dark:hover:bg-transparent md:dark:hover:text-yellow-100"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
