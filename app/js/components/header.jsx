import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <a href="about">About</a>
        <a href="contact">Contact</a>
        <a href="fun">Something fun</a>
      </nav>
    )
  }
}

export default Header;
