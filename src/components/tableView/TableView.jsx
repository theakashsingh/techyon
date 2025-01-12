import ProgressBar from "../Card/ProgressBar";
import {
  Folder,
  CheckSquare,
  Calendar,
  User,
  Users,
  BellRing,
  BarChart,
  Percent,
} from "lucide-react";
import "./index.scss";
import { getPercentage } from "../../utils";

const TableView = ({ tableType, tableData }) => {
  return (
    <div className="project-task-container">
      {tableType === "project" ? (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>
                  <span>
                    <Folder size={18} strokeWidth={1.5} /> Project Name
                  </span>
                </th>
                
                <th>
                  <span>
                    <Percent size={18} strokeWidth={1.5} />
                  </span>
                </th>
                <th>
                  <span>
                    <User size={18} strokeWidth={1.5} /> Owner
                  </span>
                </th>
                <th>
                  <span>
                    <CheckSquare size={18} strokeWidth={1.5} /> Tasks
                  </span>
                </th>
                <th>
                  <span>
                    <BarChart size={18} strokeWidth={1.5} /> Status
                  </span>
                </th>
                <th>
                  <span>
                    <Calendar size={18} strokeWidth={1.5} /> Start Date
                  </span>
                </th>
                <th>
                  <span>
                    <Calendar size={18} strokeWidth={1.5} /> End Date
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(project => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  
                  <td>{getPercentage(project.progress?.completed,project.progress?.total).toFixed(2)}</td>
                  <td><span><User size={18} strokeWidth={1.5}/> {project.owner}</span></td>
                  <td>
                    {" "}
                    <ProgressBar
                      completed={project.progress?.completed}
                      total={project.progress?.total}
                    />
                  </td>
                  <td
                    className={`table-status-badge ${project.stage
                      ?.toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {project.stage}
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
                <th>
                  <span>
                    {" "}
                    <BellRing size={18} strokeWidth={1.5} /> Task Name
                  </span>
                </th>
                <th>
                  <span>
                    <Users size={18} strokeWidth={1.5} /> Assigned Team
                  </span>
                </th>
                <th>
                  <span>
                    <User size={18} strokeWidth={1.5} /> Owner
                  </span>
                </th>
                <th>
                  <span>
                    <BarChart size={18} strokeWidth={1.5} /> Status
                  </span>
                </th>
                <th>
                  <span>
                    <Calendar size={18} strokeWidth={1.5} />
                    Start Date
                  </span>
                </th>
                <th>
                  <span>
                    <Calendar size={18} strokeWidth={1.5} /> End Date
                  </span>
                </th>
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
                  <td
                    className={`table-status-badge ${task.stage
                      ?.toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {task?.stage}
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
