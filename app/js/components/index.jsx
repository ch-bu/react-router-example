import React from 'react';
import Header from './header.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Index</h1>
      </div>
    )
  }
}

export default Index;
