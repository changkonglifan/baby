
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.less';
import {Layout, Menu, Icon} from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderBar extends Component {

  /**
   * 生成侧边栏菜单
   */
  getSiderMenu = () => {
    const siderMenu = [];
    this.props.menuData.forEach((item) => {
      if (item.children && item.children.length > 0) {
        siderMenu.push(
          <SubMenu
            key={item.key}
            title={
              <span>
                {item.icon ? <Icon type={item.icon} /> : ''}
                <span>{item.title}</span>
              </span>
            }
          >
            {
              item.children.map((it) => (
                <Menu.Item key={it.key}>
                  {it.icon ? <Icon type={it.icon} /> : ''}
                  <span>{it.title}</span>
                </Menu.Item>
              ))
            }
          </SubMenu>
        );
      } else {
        siderMenu.push(
          <Menu.Item key={item.key}>
            {item.icon ? <Icon type={item.icon} /> : ''}
            <span>{item.title}</span>
          </Menu.Item>
        );
      }
    });
    return siderMenu;
  }
  /**
   * 选择侧边栏
   */
  select = (item) => {
    this.props.setSiderSelectKey(item.key);
  }
  render(){
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.isCollapsed}
      >
        <div className='logo'>菜菜</div>
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={new Array(this.props.selectedKeys)}
          onSelect={this.select}
        >
          {
            this.getSiderMenu()
          }
        </Menu>
      </Sider>
    );
  }
}
SiderBar.propTypes = {
  menuData: PropTypes.array.isRequired,
  setSiderSelectKey: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  selectedKeys: PropTypes.string.isRequired
};
