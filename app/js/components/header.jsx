import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <NavLink to="/">Index</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/color">Color</NavLink>
      </nav>
    )
  }
}

export default Header;
