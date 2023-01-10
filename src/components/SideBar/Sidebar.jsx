import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'

import { SidebarData } from '../../Data/data'
import {UilSignOutAlt} from '@iconscout/react-unicons';
const Sidebar = () => {

    const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt=""/>
            <span>
                D<span>e</span>liv<span>e</span>ry
            </span>
        </div>
        {/* menu */}
        <div className="menu">
            {SidebarData.map((item,index) => {
                return( 
                    <div className={selected === index ? "menuItem active" : "menuItem"}
                    key={index}
                    onClick={() =>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            <Link to={item.path} className="pageController">{item.heading}</Link>
                        </span>
                    </div>
                )
            })}
            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar