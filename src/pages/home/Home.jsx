import React from 'react'
import './style.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Trnding from './trending/Trnding'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Trnding />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home