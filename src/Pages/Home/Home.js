import React from 'react'
import FeaturedSlider from './FeatredSlilder/FeaturedSlider'
import HeroSlider from './HeroSlider/HeroSlider'
import ScheduleSlider from './ScheduleSlider/ScheduleSlider'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <ScheduleSlider />
      <section className='grid grid-cols-1 lg:grid-cols-3 container p-5 gap-5'>
        <div className='lg:col-span-2'>
          <h2 className='text-2xl my-3'>Featured News</h2>
          <FeaturedSlider />
        </div>
        <div>BBBBB </div>
      </section>
    </>
  )
}

export default Home
