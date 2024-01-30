import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Topbar.css";

function TopBar({ onToggleSideNav }) {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <FontAwesomeIcon
            icon={faBars}
            onClick={onToggleSideNav}
            className="FontAwesomeIcon"
          />
          Sales Dashboard
        </div>
        <div className="right">
          <div className="profile">
            <span>Hello User</span>
            <img src="profile-icon.png" alt="Profile Icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
