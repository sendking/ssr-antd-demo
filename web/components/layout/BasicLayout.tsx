/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import { Menu } from 'antd'
import React from 'react'
const loginPath = '/login'

React.useLayoutEffect = React.useEffect

const BasicLayout: React.FC = (props) => {
  return (
    <>
      <div style={{ height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', background: 'rgb(72, 107, 249)', color: '#fff' }}>
        <div style={{ fontSize: '22px', color: 'red' }}>
          庆科智联微信小程序后台1
        </div>
        <div>
          admin
        </div>
      </div>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="12">Option 12</Menu.Item>
      </Menu>
      {props.children}
    </>
  )
}

export default BasicLayout
