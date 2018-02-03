import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>asdlf</h1>
    )
  }
}


ReactDom.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
  document.getElementById('application')
);
