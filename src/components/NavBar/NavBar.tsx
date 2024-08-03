import { MenuItem } from "@mui/material";
import { useState } from "react";
import "../../project.css";
const NavBar = () => {
  const [active, setMode] = useState(false);

  const ToggleMode = () => {
    setMode(!active);
  };

  const handleMenuClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="max-width">
            <ul className="menu">
              <li>
                <MenuItem onClick={() => handleMenuClick("about")}>
                  About
                </MenuItem>
              </li>
              <li>
                <MenuItem onClick={() => handleMenuClick("skills")}>
                  Skills
                </MenuItem>
              </li>
              <li>
                <MenuItem onClick={() => handleMenuClick("projects")}>
                  Project
                </MenuItem>
              </li>
            </ul>
          </div>
        </nav>

        <div className="app2">
          <div className="app1 none">
            <div
              className={active ? "icon iconActive " : "icon"}
              onClick={ToggleMode}
            >
              <div className="hamburguer hamburgueIcon"></div>
            </div>
            <div className={active ? "menu menuOpen" : "menu menuClose"}>
              <div className="list">
                <ul className="listItems">
                  <li>
                    <MenuItem onClick={() => handleMenuClick("about")}>
                      About
                    </MenuItem>
                  </li>
                  <li>
                    <MenuItem onClick={() => handleMenuClick("skills")}>
                      Skills
                    </MenuItem>
                  </li>
                  <li>
                    <MenuItem onClick={() => handleMenuClick("projects")}>
                      Project
                    </MenuItem>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
