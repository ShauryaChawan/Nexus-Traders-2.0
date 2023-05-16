import { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Logo = "./assets/images/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggler = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="nav_container">
      <div className="top">
        <div className="left">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <div className="right">
          <NavLink to="/" className="menu">
            Home
          </NavLink>
          <NavLink to="/about" className="menu">
            About Us
          </NavLink>
          <NavLink to="/courses" className="menu">
            Courses
          </NavLink>
          {/* <NavLink to="/blogs" className="menu">
            Blogs
          </NavLink> */}
          {/* <NavLink to="/courses" className="btns">
            <button>SignIn</button>
            <span>/</span>
            <button>SignUp</button>
          </NavLink> */}
        </div>

        <div className="btn_toggle" onClick={toggler}>
          {isNavOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      <div
        className="bottom"
        id="bottom_nav"
        style={{ opacity: isNavOpen ? "1" : "0" }}
      >
        <NavLink to="/" className="menu">
          Home
        </NavLink>
        <NavLink to="/about" className="menu">
          About Us
        </NavLink>
        <NavLink to="/courses" className="menu">
          Courses
        </NavLink>
        {/* <NavLink to="/blogs" className="menu">
          Blogs
        </NavLink> */}
        {/* <NavLink to="/courses" className="btns">
          <button className="menu">SignIn</button>
          &nbsp;/&nbsp;
          <button className="menu">SignUp</button>
        </NavLink> */}
      </div>
    </div>
  );
};

export default Navbar;
