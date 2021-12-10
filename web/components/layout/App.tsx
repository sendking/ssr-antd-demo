
// 此文件将会在服务端/客户端都将会用到
// 可通过 __isBrowser__ 或者 useEffect 判断当前在 浏览器环境做一些初始化操作
import React from 'react'
import { LayoutProps } from 'ssr-types-react'
import BasicLayout from './BasicLayout'

export default (props: LayoutProps) => {
  const path = __isBrowser__ ? location.pathname : props.ctx?.request.path
  console.log('path', path, __isBrowser__)

  if (path?.includes('web') && __isBrowser__) {
    return <BasicLayout>
      {props.children!}
    </BasicLayout>
  } else {
    return <div style={{ backgroundColor: 'red' }}>
      {props.children!}
    </div>
  }
}
