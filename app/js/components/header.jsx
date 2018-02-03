import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <a href="/">Index</a>
        <a href="about">About</a>
        <a href="color">Color</a>
      </nav>
    )
  }
}

export default Header;
