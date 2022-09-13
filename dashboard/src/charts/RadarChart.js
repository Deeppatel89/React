import React from 'react'
import {ResponsiveContainer,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar,} from 'recharts'
const data = [
    {
      subject: 'Math',
      A: 80,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];


const RadarCharts = () => {
  return (
    <div>
        <ResponsiveContainer width="100%" aspect={1.5}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}margin={{right:10,top:0,bottom:0,left:0}}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" fontSize={10} />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default RadarCharts