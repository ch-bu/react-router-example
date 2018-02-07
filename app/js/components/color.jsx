import React from 'react';
import { Switch, Route } from 'react-router-dom';

class ColorGeneral extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Choose a color</h2>
      </div>
    )
  }
}


class ColorSpecific extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.match);
  }

  render() {
    return (
      <p style={{color: this.props.match.params.color, fontSize: '4rem'}}>
        {this.props.match.params.color}</p>
    )
  }
}


class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let indexPage = this.props.match.url;

    let colors = ['green', 'brown', 'blue', 'steelblue', 'orange',
                  'darkblue', 'bisque', 'darkmagenta',
                  'deeppink'];

    let links = colors.map((color) => {
      return <a href={indexPage + "/" + color} style={{backgroundColor: color}}>{color}</a>
    });


    return (
      <div>
        <h1>Colors</h1>
        <div id="color-links">
          {links}
        </div>

        <Route path={indexPage + '/:color'} component={ColorSpecific}/>
        <Route exact path={indexPage} component={ColorGeneral} />
      </div>
    )
  }
}

export default Color;
