import React from "react";

import { NavLink } from "react-router-dom";
import { SFooter } from "../../Helper/index";

const Footer = () => {
  return (
    <SFooter>
      <p>
        &copy; <NavLink to="/">DevDesk Queue {"  "}</NavLink>
        {"   "} 2019. All Rights Reserved.
      </p>
    </SFooter>
  );
};

export default Footer;