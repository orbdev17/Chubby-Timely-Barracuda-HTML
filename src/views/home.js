import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Chubby Timely Barracuda</title>
        <meta property="og:title" content="Chubby Timely Barracuda" />
      </Helmet>
      <div className="home-container1"></div>
    </div>
  )
}

export default Home
