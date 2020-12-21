import React from "react";
import { Link } from "react-router-dom";

function Nav(){

  return (
    <div className="Nav">
        <div className="Name"><Link to="/">
        Caitlin Gronski
        </Link></div>
        <div className="Pages">
        <Link to="/" className="Button">
            About
        </Link>
        <Link to="/writingsamples" className="Button">
            Writing Samples
        </Link>
        </div>
    </div>
  );
}

export default Nav;