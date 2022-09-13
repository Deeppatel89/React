import React from 'react'
import {ResponsiveContainer,BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts'


const data = [
  {
    "name": "Page A",
    "uv": 1,
    "pv": 6,
  },
  {
    "name": "Page B",
    "uv": 2,
    "pv": 5,
  },
  {
    "name": "Page C",
    "uv": 3,
    "pv": 8,
  },
  {
    "name": "Page D",
    "uv": 4,
    "pv": 8
  },
  {
    "name": "Page E",
    "uv": 5,
    "pv": 5
  },
  {
    "name": "Page F",
    "uv": 6,
    "pv": 5
  },
  {
    "name": "Page G",
    "uv": 7,
    "pv": 4
  }
]

const BarCharts = () => {
  return (
    <div >
      <ResponsiveContainer width='100%' aspect={1.3}>
      <BarChart   data={data} margin={{right:10,top:10,bottom:20,left:10}} barSize={20}>
        {/* <CartesianGrid  /> */}
        <XAxis dataKey="uv" fontSize={10}  interval={'preserveStartEnd'} padding={{ left: 10, right: 10 }} />
        <YAxis dataKey='pv' fontSize={10}/>
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }}/>
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default BarCharts
