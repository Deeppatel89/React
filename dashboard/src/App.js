import React from 'react'
import './App.css'
import BarCharts from './charts/BarChart'
import LineCharts from './charts/LineChart'
import RadarCharts from './charts/RadarChart'
import Blog from './component/Blog'
import NavBar from './navbar/NavBar'
import SideBar from './sidebar/SideBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="main-container">
        <div className="sidebarmain">
          <SideBar />
        </div>
        <div className="dashboard_main">
          <div className="blog_main">
          <Blog />
          </div>
          <div className="chart_main">
            <div className="barchart">
            <BarCharts />
            </div>
            <div className="linechart">
              <LineCharts/>
            </div>
            <div className="RadarChart">
              <RadarCharts/>
            </div>
          
          </div>
          <div className="blank"></div>
          
         
        </div>
      </div>



    </div>
  )
}

export default App