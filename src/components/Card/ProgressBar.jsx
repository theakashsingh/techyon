import { getPercentage } from "../../utils";
import './progressBar.scss'

const ProgressBar = ({ completed, total }) => {
  return (
    <div className="progress-section">
      <span>{completed}</span>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${getPercentage(completed, total).toFixed()}%` }} />
      </div>
      <span className="progress-completed">
        {" "}
        {`${getPercentage(completed, total).toFixed()}%`}
      </span>
      <span>{`${total}`}</span>
    </div>
  );
};

export default ProgressBar