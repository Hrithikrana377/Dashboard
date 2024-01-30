import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import SideNav from "./Sidenav/SideNav";
import { getStates } from "./store/states";
import store from "./store/store";
import TopBar from "./TopBar/topbar";

function App() {
  const [isSideNavCollapsed, setIsSideNavCollapsed] = useState(false);
  const dispatch = useDispatch();

  const toggleSideNav = () => {
    setIsSideNavCollapsed(!isSideNavCollapsed);
  };

  return (
    <div className="App">
      <TopBar onToggleSideNav={toggleSideNav} />
      <div className="space">
        <SideNav isCollapsed={isSideNavCollapsed} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
