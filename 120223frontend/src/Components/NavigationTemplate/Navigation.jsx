// import Nav from "../NavIconTemplate/Nav";
import "./Navigation.css";
import logo from "../../assets/KAICommuter.png";
import { NavLink } from 'react-router-dom';


import { FiChevronLeft, FiList } from "react-icons/fi";
import { TbDashboard } from "react-icons/tb";
// import { VscGraphLine } from "react-icons/vsc";
import {
  // AiOutlineUsergroupAdd,
  // AiOutlineDollarCircle,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { MdOutlineNotificationsActive, MdSwapHoriz } from "react-icons/md";
// import { RiAccountCircleLine } from "react-icons/ri";
// import { BiMessageAltAdd, BiDotsHorizontalRounded } from "react-icons/bi";
import { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../../features/authSlice';
import { IoLogOutOutline } from "react-icons/io5";

const Navigation = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const [nav, setnav] = useState(false);

  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }

  return (
    <div className={`navigation ${nav && "active"} ${DarkTheme && "dark"}`}>
      <div
        className={`menu ${nav && "active"}`}
        onClick={() => {
          setnav((prevState) => !prevState);
        }}
      >
        <FiChevronLeft className="menu-icon" />
      </div>

      <header>
        <div className="profile">
          <img
            src={logo}
            alt="user-img"
            className="profile-img"
          />
        </div>
        <span><strong>{user && user.name}</strong></span>
      </header>

      <NavLink to="/dashboard" className="navlink">
        <TbDashboard className="icon" />
        <h2>Dashboard</h2>
      </NavLink>
      <NavLink to="/products" className="navlink">
        <FiList className="icon" />
        <h2>Product</h2>
      </NavLink>
      {/* <Nav Icon={TbDashboard} title={"Dashboard"} />
      <Nav Icon={VscGraphLine} title={"Analytics"} />
      <Nav Icon={FiMessageSquare} title={"Messages"} />
      <Nav Icon={AiOutlineUsergroupAdd} title={"Followers"} /> */}

      <div className="divider"></div>
      <NavLink to="/notifikasi" className="navlink">
        <MdOutlineNotificationsActive className="icon" />
        <h2>Notifications</h2>
      </NavLink>
      {/* <Nav Icon={MdOutlineNotificationsActive} title={"Notifications"} /> */}
      {/* <Nav Icon={RiAccountCircleLine} title={"Following"} />
      <Nav Icon={AiOutlineDollarCircle} title={"Earnings"} />
      <Nav Icon={TbFileUpload} title={"Posts"} />
      <Nav Icon={BiMessageAltAdd} title={"Message Requests"} /> */}
      <NavLink to="/changeaccount" className="navlink">
        <AiOutlineUserSwitch className="icon" />
        <h2>Change Account</h2>
      </NavLink>
      {/* <Nav Icon={AiOutlineUserSwitch} title={"Change Account"} /> */}

      <div className="divider"></div>
      <NavLink
        className="navlink"
        title={`${DarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"
          }`}
        onClick={changeTheme}
      >
        <MdSwapHoriz className="icon" />
        <h2>
          {`${DarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}`}
        </h2>
      </NavLink>
      {/* <Nav
        Icon={MdSwapHoriz}
        title={`${DarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"
          }`}
        onClick={changeTheme}
      /> */}
      {/* <Nav Icon={BiDotsHorizontalRounded} title={"More details"} /> */}
      <button onClick={logout} className="navlinkbtn">
        <IoLogOutOutline className="icon" />
        <h2>Logout</h2>
      </button>
      <svg
        className="bg-waves"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fill: "#ffffff",
          width: "265%",
          height: 252,
          transform: "scaleX(-1)",
        }}
      >
        <path
          d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
          opacity=".25"
        />
        <path
          d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
          opacity=".5"
        />
        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
      </svg>
    </div>
  );
};

export default Navigation;
