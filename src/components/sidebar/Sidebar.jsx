import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { GiCow } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { FaWarehouse } from "react-icons/fa";
import React from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">DFMS</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/cow" style={{ textDecoration: "none" }}>
            <li>
              <GiCow className="icon" />
              <span>Cows</span>
            </li>
          </Link>
          <Link to="/calf" style={{ textDecoration: "none" }}>
            <li>
              <GiCow className="icon" />
              <span>Calf</span>
            </li>
          </Link>
          <Link to="/supplier" style={{ textDecoration: "none" }}>
            <li>
              <BsBoxSeam className="icon" />
              <span>Suppliers</span>
            </li>
          </Link>
          <Link to="/shade" style={{ textDecoration: "none" }}>
            <li>
              <FaWarehouse className="icon" />
              <span>Shades</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
