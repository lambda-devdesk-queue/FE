    
import React from "react";

import MainMenu2 from "./MainMenu2";
import { DashboardDiv } from "../../Helper";

const Dashboard2 = props => {
  return (
    <DashboardDiv>
      <MainMenu2 />
      <div className="dash-main">{props.children}</div>
    </DashboardDiv>
  );
};

export default Dashboard2;