import React from "react";
import {
  Navbar as MTNavbar,
} from "@material-tailwind/react";
import { Link } from 'react-scroll';

export function Navbar() {
  return (
    <MTNavbar color="transparent" className="p-3 block">
      <div className="container mx-auto flex items-center block justify-between text-white">
        <div className="rounded-full flex items-center justify-center" >
          <img className="mx-auto w-full h-auto h-24 rounded-full" id="imgLogo" style={{ width: 125, height: 125 }} src="img/logo.png" alt="TPCP Admnistração" />
        </div>
        <div className=" items-center w-full md:flex md:w-auto hidden lg:block">
          <ul className ="mb-4 mt-2 flex gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li>
              <Link to="#" className="block py-2 pl-3 pr-4 text-white bg-yellow-100 rounded md:bg-transparent md:text-yellow-100 md:p-0 md:dark:text-yellow-100 pointer-events-none" aria-current="page">Principal</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} spy={true} exact="true" className="cursor-pointer block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-yellow-100 dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Sobre nós</Link>
            </li>
            <li>
              <Link to="offices" smooth={true} duration={500} spy={true} exact="true" className="cursor-pointer block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-yellow-100 dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Escritórios</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} spy={true} exact="true" className="cursor-pointer block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-yellow-100 dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </MTNavbar>
  )
}

export default Navbar;
