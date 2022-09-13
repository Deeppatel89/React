import React from 'react'
import './SideBar.css'
import sidebar from '../apis/SidebarApi'

const SideBar = () => {
    return (
        <div>
            <div className="sidebar">
                {sidebar.map((e) => {
                    return (
                        <div className="component">
                            <div className="icon">{e.icon}</div>
                            <div className="name">{e.name}</div>
                            <div className="notification"></div>
                        </div>

                    )
                })}



            </div>
        </div>
    )
}

export default SideBar