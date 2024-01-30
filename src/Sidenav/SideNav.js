import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideNav.css";
import { Menuvalues } from "../SidenavMenus/SidenavMenu";

const SideNav = ({ isCollapsed }) => {
  return (
    <>
      <nav className={isCollapsed ? "shrink" : "sidenav"}>
        <ul>
          {Menuvalues.map((x) => (
            <li>
              <FontAwesomeIcon icon={x.icon} key={x.id} className="icon" />
              <span>{x.text}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideNav;
