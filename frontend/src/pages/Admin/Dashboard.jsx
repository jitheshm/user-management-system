import React from 'react'
import DashboardComponent from '../../components/Admin/Dashboard/DashboardComponent'
import NavbarComponent from '../../components/Admin/Navbar/NavbarComponent'

function Dashboard() {
    return (
        <>
        <NavbarComponent/>
            <DashboardComponent />
        </>
    )
}

export default Dashboard