import React from 'react';
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

    console.log(this.props.match.path);
  }

  render() {
    let indexPage = this.props.match.url;

    return (
      <div>
        <h1>Colors general page</h1>
        <Route exact path={indexPage} component={ColorGeneral} />
        <Route path={`/color/:id`} component={ColorSpecific}/>
      </div>
    )
  }
}

export default Color;
