import React from 'react'
import LaLigaTable from './LaLigaTable/LaLigaTable'
import Newsletter from './Newsletter/Newsletter'
import PopularPosts from './PopularPosts/PopularPosts'
import PremierLeagueTable from './PremierLeagueTable/PremierLeagueTable'
import SerieATable from './SerieAATable/SerieATable'
import UpcomingMatches from './UpcomingMatches/UpcomingMatches'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-8'>
      <LaLigaTable />
      <PopularPosts />
      <PremierLeagueTable />
      <>
        <img
          src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/add_banner2.jpg'
          alt='Sidebar-ad'
        />
      </>
      <UpcomingMatches />
      <Newsletter />
      <>
        <img
          src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2017/03/banner-blue.jpg'
          alt='sidebar-ad'
        />
      </>
      <SerieATable />
    </div>
  )
}

export default Sidebar
