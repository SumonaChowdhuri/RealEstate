import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/SideBar/SideBar";
import Dashboard from "../Dashboard/Dashboard";
import Search from "../Search/Search";
const LayoutDashboard=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Dashboard className="dashboard" />
            <Search className="dashboard" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutDashboard;