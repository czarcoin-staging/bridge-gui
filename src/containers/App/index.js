import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import config from '../../config';

export default class App extends Component {
  render() {
    //const styles = require('./App.scss');
    return (
      <div>
        <Helmet {...config.app.head}/>
        <div>
        	{ this.props.navComponent }
        	{ this.props.mainComponent }
        </div>
      </div>
    );
  }
}
