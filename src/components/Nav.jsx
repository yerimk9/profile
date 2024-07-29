import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav_lists">
        <li className="nav_list">
          <ScrollLink
            to="introduce"
            smooth={true}
            duration={1000}
            className="nav_link"
          >
            Introduction<span>소개</span>
          </ScrollLink>
        </li>
        <li className="nav_list">
          <ScrollLink
            to="skill"
            smooth={true}
            duration={1000}
            className="nav_link"
          >
            Skill<span>스킬</span>
          </ScrollLink>
        </li>
        <li className="nav_list">
          <ScrollLink
            to="project-1"
            smooth={true}
            duration={1000}
            className="nav_link"
          >
            Project<span>프로젝트</span>
          </ScrollLink>
        </li>
        <li className="nav_list">
          <ScrollLink
            to="sns"
            smooth={true}
            duration={1000}
            className="nav_link"
          >
            SNS<span>소셜미디어</span>
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
