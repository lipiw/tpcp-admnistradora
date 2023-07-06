import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  Typography,
} from "@material-tailwind/react";

export function Navbar() {
  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            TPCP ADMINISTRADORA
          </Typography>
        </Link>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
