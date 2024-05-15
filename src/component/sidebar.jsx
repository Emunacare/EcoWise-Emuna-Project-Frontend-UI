import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineSettings, MdOutlineWebhook } from "react-icons/md";
import { FaBeer } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiMineTruck } from "react-icons/gi";
import { ImBin2 } from "react-icons/im";
import { IoReorderThree } from "react-icons/io5";

const Sidebar = ({ open }) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const isOpen = Boolean(toggleOpen);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const onNavigation = (path) => {
    navigate(path);
  };
  const handleMouseEnter = () => {
    setToggleOpen(true);
  };

  const handleMouseLeave = () => {
    setToggleOpen(false);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  const [showAddNotes, setShowAddNotes] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const sidebarNav = [
    { name: "Dashboard", img: <MdSpaceDashboard />, path: "/" },
    { name: "Staff", img: <IoIosPeople />, path: "/staff" },
    { name: "Driver", img: <IoIosPeople />, path: "/driver" },
    { name: "Truck", img: <GiMineTruck />, path: "/truck" },
    { name: "Dustbin", img: <ImBin2 />, path: "/dustbin" },
  ];
  const { pathname } = useLocation();
  return (
    <>
      <div
        className={`sidebar-app ${
          !isOpen && "not-open"
        } basic-center-div flex-col`}
        ref={sidebarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`sidebar-head basic-center-div  ${!isOpen && "not-open"}`}
        >
          {/* <div className={`mini-head-text unique ${!isOpen && "not-show"}`}>
            Ecommerce   
          </div> */}
          <span
            className="side-icon outline"
            onClick={() => setToggleOpen(!toggleOpen)}
          >
            {isOpen ? <MdOutlineWebhook /> : <IoReorderThree />}
          </span>
        </div>
        <div
          className={`mini-sub-sidebar ${
            !isOpen && "not-open"
          } basic-center-div flex-col`}
        >
          {sidebarNav.map((nav, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  if (nav.name === "New Notes") {
                    setShowAddNotes(true);
                  } else {
                    onNavigation(nav.path || "/");
                  }
                  setActiveNav(i);
                }}
                // className={`mini-mini-sub-sidebar basic-center-div
                //   ${pathname === nav.path && "active"}
                className={`mini-mini-sub-sidebar basic-center-div active ${
                  !isOpen && "not-open"
                }`}
              >
                <div className={`side-icon small ${!isOpen && "not-open"}`}>
                  {nav.img}
                </div>
                <div className={`mini-head-text ${!isOpen && "not-show"}`}>
                  {nav.name}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`sidebar-head bottom  basic-center-div ${
            !isOpen && "not-open"
          }`}
        >
          <span className="side-icon">
            <MdOutlineSettings />
          </span>
          <div className={`mini-head-text big ${!isOpen && "not-show"}`}>
            Settings
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
