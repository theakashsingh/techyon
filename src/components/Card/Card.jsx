import "./index.scss";
import CalenderIcon from "../../assets/calendar.svg";
import FolderIcon from "../../assets/folder.svg";
import FileIcon from "../../assets/file.svg";

const StatusBadge = ({ status, children }) => {
  return (
    <div
      className={`status-badge status-badge--${status
        .toLowerCase()
        .replace(" ", "-")}`}
    >
      {children}
      <div
        className={`triangle-down triangle-down--${status
          .toLowerCase()
          .replace(" ", "-")}`}
      ></div>
    </div>
  );
};

const Card = ({cardData}) => {
  
  const getInitials = name => name.split(" ")[0][0];
  const getPercentage = (value,total)=>{
    if (total === 0) {
      return 'Total cannot be zero';
    }
    return (value / total) * 100;
  }

  return (
    <div className="card">
     {
      cardData.status &&  <div className="card-status">
      <StatusBadge status={cardData.status}>{cardData.status}</StatusBadge>
    </div>
     }

      <div className="name-and-id">
        <div className="project-name">
          <img src="" alt="" srcSet={FolderIcon} />
          <span>{cardData.name}</span>
        </div>
        <div className="project-id">
          ID:<span>{cardData.id}</span>
        </div>
      </div>

      <div className="progress-section">
        <span>{cardData.progress.completed}</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${cardData.progress.total}%` }}
          />
        </div>
        <span className="progress-completed">
          {" "}
          {`${getPercentage(cardData.progress.completed,cardData.progress.total).toFixed()}%`}
        </span>
        <span>{`${cardData.progress.total}`}</span>
      </div>

      <div className="date-range">
        <img src="" alt="" srcSet={CalenderIcon} />
        <span>
          {cardData.date.start} - {cardData.date.end}
        </span>
      </div>

      <div className="footer">
        <div className="team-members">
          <div className="avatar-group">
            {cardData.team.slice(0, 3).map((member, index) => (
              <div key={index} className="avatar">
                {getInitials(member.name)}
              </div>
            ))}
          </div>
          {cardData.team.length > 3 && (
            <span className="remaining-count">
              +{cardData.team.length - 3}
            </span>
          )}
        </div>

        <div className="files-count">
          <img src={FileIcon} alt="" />
          <span>{cardData.files} Files</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
