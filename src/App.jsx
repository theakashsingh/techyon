import "./App.scss";
import Card from "./components/Card/Card";
import GridView from "./components/gridView/GridView";
import TableView from "./components/tableView/TableView";
import projectData from "./projectMockData";
import taskData from "./taskMockData";

function App() {
  return (
    <div>
      {/* <Card/> */}
      <GridView
        cardsData={projectData}
        stageOrder={["Not Started", "In Progress", "Archive", "Completed"]}
      />
      <GridView cardsData={taskData} stageOrder={["In Progress", "In Review", "In Revision", "Completed"]}/> 
      <TableView tableType={"project"} tableData={projectData} />
      <TableView tableType={"tasks"} tableData={taskData} />
    </div>
  );
}

export default App;
