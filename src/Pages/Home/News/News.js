import React from 'react'
import NewsCard from '../../../components/cards/NewsCard'

const News = () => {
  return (
    <div className='my-5'>
      <NewsCard classess='md:flex' />
      <NewsCard classess='md:flex order-last' />
      <div className='grid grid-cols-2 gap-3'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <NewsCard classess='md:flex' />
      <NewsCard classess='md:flex order-last' />
      <>
        <img
          src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/add_banner.jpg'
          alt='Ad'
        />
      </>
    </div>
  )
}

export default News
