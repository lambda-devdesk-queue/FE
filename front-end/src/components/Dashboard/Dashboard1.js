    
import React from "react";

import MainMenu from "./MainMenu";
import { DashboardDiv } from "../../Helper";

const Dashboard1 = props => {
  return (
    <DashboardDiv>
      <MainMenu />
      <div className="dash-main">{props.children}</div>
    </DashboardDiv>
  );
};

export default Dashboard1;