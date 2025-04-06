import React from "react";
import { isLargeViewport } from "../utility";
import NavigationModal from "./NavigationModal";

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav>
      <img alt="logo" src="logo.svg" />
      {isLargeViewport() ? (
        <ul>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              skills
            </a>
          </li>
          <li>
            <a
              href="#features"
              className={activeSection === "features" ? "active" : ""}
            >
              features
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              say hello
            </a>
          </li>
        </ul>
      ) : (
        <img
          alt="menu hamburger"
          src="hamburger.svg"
          className="menu"
          onClick={() => setIsOpen(true)}
        />
      )}
      <NavigationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
