import React from 'react'
import {ResponsiveContainer,LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line} from 'recharts'

const data = [
    {
      "name": "Page A",
      "uv": 2,
      "pv": 4,
    },
    {
      "name": "Page B",
      "uv": 3,
      "pv": 2,
    },
    {
      "name": "Page C",
      "uv": 5,
      "pv": 6,
    },
    {
      "name": "Page D",
      "uv": 6,
      "pv": 4
    },
    {
      "name": "Page E",
      "uv": 3,
      "pv": 7
    },
    {
      "name": "Page F",
      "uv": 6,
      "pv": 8
    },
    {
      "name": "Page G",
      "uv": 4,
      "pv": 2
    }
  ]
const LineCharts = () => {
  return (
    <div>
         <ResponsiveContainer width="100%" aspect={1.1}>
        <LineChart data={data} margin={{right:10,top:10,bottom:20,left:10}}>
         
          <XAxis dataKey="uv" fontSize={10} />
          {/* <YAxis /> */}
          <Tooltip />
          
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 2 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default LineCharts