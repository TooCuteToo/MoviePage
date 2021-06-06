import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const getIcon = (iconName) => require(`../../icons/${iconName}`);
  const { icon_1, icon_2, className } = props;
  return (
    <header className={className}>
      <Link to="/" className="logo">
        <img src={getIcon(icon_1)} alt="logo" />
      </Link>
      <div className="toggle">
        <img src={getIcon(icon_2)} alt="toggle" />
      </div>
    </header>
  );
}

export default Header;
