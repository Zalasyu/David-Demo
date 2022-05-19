import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
      <>
      <Navbar />
      <h1> 
        Populated by containers that pulls data from other services.
        Each container displays a preview of what that service does or
        some summary visualizations of a specific business capability.
      </h1>
    <div className='page-wrapper'></div>
      <Footer />
      </>
  )
}

export default Dashboard