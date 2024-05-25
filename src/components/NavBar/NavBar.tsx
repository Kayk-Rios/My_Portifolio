import { MenuItem } from "@mui/material";
import "../../project.css";
const NavBar = () => {
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
                                {" "}
                                <MenuItem onClick={() => handleMenuClick("about")}>
                                    About
                                </MenuItem>{" "}
                            </li>
                            <li>
                                {" "}
                                <MenuItem onClick={() => handleMenuClick("skills")}>
                                    Skills
                                </MenuItem>
                            </li>
                            <li>
                                {" "}
                                <MenuItem onClick={() => handleMenuClick("projects")}>
                                    Project
                                </MenuItem>{" "}
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default NavBar;
