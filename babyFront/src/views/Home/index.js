
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SiderBar from '../../component/SiderBar';
import { Route } from 'react-router-dom';

import HeaderComponent from '../../component/HeaderComponent';
import Main from '../Main';

import { Layout} from 'antd';
const { Content, Footer } = Layout;
import './index.less';

import { setSiderSelectKey } from '../../actions/siderBar';

class Home extends Component {
    state = {
      isCollapsed: false
    }
    /**
    * 左侧菜单
    */
    toggle = () => {
      this.setState({
        isCollapsed: !this.state.isCollapsed
      });
    }
    render() {
      return (
        <Layout>
          <SiderBar
            menuData={this.props.menuData}
            setSiderSelectKey={this.props.setSiderSelectKey}
            selectedKeys={this.props.selectKey}
            isCollapsed={this.state.isCollapsed}
          />
          <Layout>
            <HeaderComponent
              toggle={this.toggle}
              isCollapsed={this.state.isCollapsed}
            />
            <Content
              style={
                {
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280
                }
              }>
              <div className='content'>
                <Route
                  exact
                  strict
                  path='/home/index'
                  component={Main}
                />
              </div>
            </Content>
            <Footer>
              Footer
            </Footer>
          </Layout>
        </Layout>
      );
    }
}
Home.propTypes = {
  menuData: PropTypes.array.isRequired,
  setSiderSelectKey: PropTypes.func.isRequired,
  selectKey: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    menuData: state.home.menuData,
    selectKey: state.home.selectKey
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSiderSelectKey: bindActionCreators(setSiderSelectKey, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
