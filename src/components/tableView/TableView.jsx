import { Progress } from "../Card/Card";
import "./index.scss";

const TableView = ({ tableType, tableData }) => {
    console.log(tableData);
    
  return (
    <div className="project-task-container">
      {tableType === "project" ? (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Project Name</th>
                <th>Progress</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(project => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>
                    {" "}
                    <Progress
                      completed={project.progress?.completed}
                      total={project.progress?.total}
                    />
                  </td>
                  <td>{project.owner}</td>
                  <td>
                    <span
                      className={`status-badge ${project.stage
                        ?.toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {project.stage}
                    </span>
                  </td>
                  <td>{project.date?.start}</td>
                  <td>{project.date?.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Task Name</th>
                <th>Assigned Team</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(task => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.name}</td>
                  <td>
                    {task.associated_team
                      ? task.associated_team
                      : "Not Assigned"}
                  </td>
                  <td>{task.owner}</td>
                  <td>
                    <span
                      className={`status-badge ${task.stage
                        ?.toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {task?.stage}
                    </span>
                  </td>
                  <td>{task.date?.start}</td>
                  <td>{task.date?.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableView;
