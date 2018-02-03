import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import AppIndex from './components/index.jsx';
import About from './components/about.jsx';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={AppIndex} />
          <Route path='/about' component={About} />
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
