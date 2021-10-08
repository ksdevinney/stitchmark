import React from 'react';
import { Link } from "react-router-dom";

const NavTabs = () => {
    return (
<ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/projects"
        >
          Projects
        </Link>
      </li>
    </ul>
    )
}

export default NavTabs
