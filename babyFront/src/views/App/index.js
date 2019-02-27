
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Index from '../Index';

import './index.less';

import {
} from '../../actions/index';
class App extends Component {


  render(){
    return(
      <div className='main'>
        {/* 首页路由 */}
        {/* <Redirect exact from='/App' to='/App/index'></Redirect> */}
        <Route exact strict path='/app/index' component={Index} />
      </div>
    );
  }
}
App.propTypes = {
  Index: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps) (App);
