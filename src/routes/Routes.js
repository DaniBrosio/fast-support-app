import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from '../components/Home/Home';


class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Home}/>
      </>
    );
  }
}

export default Routes;