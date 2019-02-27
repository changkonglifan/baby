
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.less';
class Index extends Component {

  render(){
    return(
      <div className='banner fade in'>
        <div className='center-txt'>
          <Link to='/home'><h1 className='name'>{this.props.name}</h1></Link>
          <hr></hr>
          <p>{this.props.introduce}</p>
        </div>
      </div>
    );
  }
}
Index.propTypes = {
  name: PropTypes.string.isRequired,
  introduce: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    name: state.index.name,
    introduce: state.index.introduce
  };
}

export default connect(mapStateToProps)(Index);
