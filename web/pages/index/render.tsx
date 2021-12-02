import React, { useContext } from 'react'
import { SProps, IContext } from 'ssr-types-react'
import Slider from '@/components/slider'
import Rectangle from '@/components/rectangle'
import { IData } from '~/typings/data'
import { STORE_CONTEXT } from '_build/create-context'
import { Pagination } from 'antd'
import ReactECharts from 'echarts-for-react';


export default function Index(props: SProps) {
  const { state, dispatch } = useContext<IContext<IData>>(STORE_CONTEXT)
  return (
    <div>
      <ReactECharts option={{
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ],
        tooltip: {
          trigger: 'axis'
        }
      }} />
      <Pagination />
      {
        state?.indexData?.data?.[0]?.components ? <div>
          <Slider {...props} data={state.indexData.data[0].components} />
          <Rectangle {...props} data={state.indexData.data[1].components} />
        </div> : <img src='https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif' className='loading' />
      }
    </div>
  )
}
