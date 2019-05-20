import React from "react";
import { Link } from "react-router-dom";

import { LoginForm} from "../Helper";
// import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <div>
      <LoginForm>
        <link1>
      <button type="submit">
         <Link to="/sign-up-a">Admin</Link>
      </button>
      <button type="submit">
         <Link to="/sign-up">Student</Link>
      </button>
      </link1>
      </LoginForm>
      </div>

  );
};