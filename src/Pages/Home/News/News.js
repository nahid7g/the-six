import React from 'react'
import NewsCard from '../../../components/cards/NewsCard'

const News = () => {
  return (
    <div className='my-5'>
      <div className='flex flex-col gap-8'>
        <NewsCard classess='md:grid grid-cols-2' />
        <NewsCard classess='md:grid grid-cols-2' orderClass='order-last' />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <NewsCard classess='md:grid grid-cols-2' />
        <NewsCard classess='md:grid grid-cols-2' orderClass='order-last' />
      </div>
      <div className='flex justify-center my-8'>
        <img
          src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/add_banner.jpg'
          alt='Ad'
        />
      </div>
    </div>
  )
}

export default News
