
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.less';
import { Layout, Menu, Icon, Badge, Avatar, Dropdown} from 'antd';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

export default class HeaderComponent extends Component {

  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className='trigger'
          type={this.props.isCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <div className='header-right'>
          <Icon type='search' className='item'/>
          <Icon type='question' className='item'/>
          <Badge count={5}>
            <Icon type='bell'/>
          </Badge>

          <Dropdown overlay={
            <Menu
              className='user'
              mode='vertical'
            >
              <Menu.Item key='center'>个人中心</Menu.Item>
              <Menu.Item key='log'>退出</Menu.Item>
            </Menu>
          } placement='bottomLeft'>
            <Avatar size='large' icon='user' />
          </Dropdown>
        </div>
      </Header>
    );
  }
}
HeaderComponent.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
