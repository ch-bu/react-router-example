import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, IndexRoute} from 'react-router-dom';
import AppIndex from './components/index.jsx';
import About from './components/about.jsx';
import Color from './components/color.jsx';
import styles from '../scss/style.scss'
import Header from './components/header.jsx';


class Test extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <p>{this.props.match.params.id}</p>
    )
  }
}

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={AppIndex} />
          <Route path='/about' component={About} />
          <Route path='/color' component={Color} />
        </Switch>
      </div>
    )
  }
}


ReactDom.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
  document.getElementById('application')
);
