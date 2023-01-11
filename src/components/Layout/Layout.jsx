import React from 'react'
import ShipmentsTable from "../Table/Table";
import SearchAria from "../SearchAria/SearchAria";
import './Layout.css'
import {Routes, Route} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
    <SearchAria/>
      <div className="Layout">
        <Routes className='Main'>
            <Route path='/' element=<ShipmentsTable/>/>
        </Routes>
      </div>
    </div>
  )
}

export default Layout
