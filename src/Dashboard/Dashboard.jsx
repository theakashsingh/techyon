import GridView from "../components/gridView/GridView";
import TableView from "../components/tableView/TableView";
import projectData from "../projectMockData";
import taskData from "../taskMockData";
import "./index.scss";
import SelectView from "./SelectView";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="heading">
          <h1>Projects</h1>
          <button>+ Projects</button>
        </div>
        <div className="project-overview">
          <span>dashboard</span> / <span>Project Overview</span>
        </div>
      </div>

      <div className="view">
        <SelectView
          gridView={
            <GridView
              cardsData={projectData}
              stageOrder={[
                "Not Started",
                "In Progress",
                "Archive",
                "Completed",
              ]}
            />
          }
          tableView={
            <TableView tableType={"project"} tableData={projectData} />
          }
          title={"All Projects"}
        />
        <SelectView
          gridView={
            <GridView
              cardsData={taskData}
              stageOrder={[
                "In Progress",
                "In Review",
                "In Revision",
                "Completed",
              ]}
            />
          }
          tableView={<TableView tableType={"tasks"} tableData={taskData} />}
          title={"All Tasks"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
