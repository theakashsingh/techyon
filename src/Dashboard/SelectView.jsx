import { useState } from "react";
import tableIcon from "../assets/table.svg";
import gridIcon from "../assets/grid.svg";
import darkTableIcon from "../assets/darkTable.svg";
import darkGridIcon from "../assets/darkGrid.svg";

const SelectView = ({ gridView, tableView, title }) => {
  const [activeView, setActiveView] = useState("gridView");
  return (
    <div className="select-view">
      <div className="select-view-heading">
        <h2>{title}</h2>
        <div className="view-btn">
          <span onClick={()=>setActiveView("tableView")}>
          {activeView==="tableView" ?<img src={darkTableIcon} alt="table" srcSet="" />:<img src={tableIcon} alt="table" srcSet="" />} 
          </span>
          <span onClick={()=>setActiveView("gridView")}>
           {activeView==="gridView" ?<img src={darkGridIcon} alt="table" srcSet="" />:<img src={gridIcon} alt="table" srcSet="" />} 
          </span>
        </div>
      </div>
      {activeView === "gridView" ? gridView : tableView}
    </div>
  );
};

export default SelectView;
