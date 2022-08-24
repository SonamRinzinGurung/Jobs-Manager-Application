import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignJustify, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { toggleSidebar, logoutUser, user } = useAppContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignJustify />
        </button>
        <div>
          <Logo />
          {/* <h3 className="logo-text">Dashboard</h3> */}
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showDropdown ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              <BiLogOutCircle />
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
