
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.less';
class Main extends Component {

  render() {
    return (
      <div>

      </div>
    );
  }
}
Main.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Main);
