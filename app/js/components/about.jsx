import React from 'react';
import Header from './header.jsx';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>About</h1>
      </div>
    )
  }
}

export default About;
