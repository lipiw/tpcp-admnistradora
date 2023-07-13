import React from "react";
import {
  Navbar as MTNavbar,
} from "@material-tailwind/react";

export function Navbar() {


  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <div className="rounded-full flex items-center justify-center" >
          <img class="block mx-auto h-24 rounded-full  sm:mx-0 sm:shrink-0" style={{ width: 155, height: 155 }} src="../../../public/img/logo.png" alt="TPCP Admnistração" />
        </div>
        <div className=" items-center w-full md:flex md:w-auto">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-100">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-yellow-100 rounded md:bg-transparent md:text-yellow-100 md:p-0 md:dark:text-yellow-100 pointer-events-none" aria-current="page">Principal</a>
            </li>
            <li>
              <a href="#about" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-yellow-100 dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Sobre nós</a>
            </li>
            <li>
              <a href="#offices" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-yellow-100 dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Escritórios</a>
            </li>
            <li>
              <a href="#contact" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-100 md:p-0 md:dark:hover:text-yellow-100 dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
