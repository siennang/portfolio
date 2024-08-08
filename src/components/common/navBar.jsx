import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./styles/navBar.css";

const NavBar = (props) => {
  const { active } = props;

  const scrollToSection = (sectionId) => {
	const offset = -150; // Adjust this value for the desired offset
	const element = document.getElementById(sectionId);
	if (element) {
	  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
	  window.scrollTo({
		top: elementPosition + offset,
		behavior: 'smooth',
	  });
	}
  };
  
  const handleScroll = (sectionId, e) => {
	e.preventDefault(); // Prevent the default scrolling behavior
	scrollToSection(sectionId);
  };
  
  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li
                className={
                  active === "home" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={
                  active === "nav-link" ? "nav-item active" : "nav-item"
                }
              >
                <a href="#home-project" onClick={(e) => handleScroll("home-project", e)}>
                  Projects
                </a>
              </li>
              <li
                className={
                  active === "nav-link" ? "nav-item active" : "nav-item"
                }
              >
                <a href="#home-work" onClick={(e) => handleScroll("home-work", e)}>
                  Experience
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
