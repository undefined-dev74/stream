import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="nav nav-pills flex-column flex-sm-row bg-dark">
        <Link to="/" className="flex-sm-fill text-sm-center nav-link active">
          Streamer
        </Link>
        <Link to="/" className="flex-sm-fill text-sm-center nav-link">
          All Streams
        </Link>
        <Link to="/" className="flex-sm-fill text-sm-center nav-link">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Header;
