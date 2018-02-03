import React from 'react';
import Header from './header.jsx';
import { Switch, Route } from 'react-router-dom';

class ColorGeneral extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>This is the parent color page</p>
    )
  }
}


class ColorSpecific extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>This is the specific color page</p>
    )
  }
}


class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Colors general page</h1>

        <Switch>
          <Route path='/color/:number' component={ColorSpecific} />
          <Route exact path='/color' component={ColorGeneral} />
        </Switch>
      </div>
    )
  }
}

export default Color;
