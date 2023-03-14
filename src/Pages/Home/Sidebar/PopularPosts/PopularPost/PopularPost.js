import React from 'react'

const PopularPost = () => {
  return (
    <section className='flex gap-3 text-sm'>
      <div>
        <a href='/'>
          <img
            src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/playingalone-150x150.jpg'
            alt='the post'
            className='w-24 h-20'
          />
        </a>
      </div>
      <div className='flex flex-col justify-between'>
        <div>
          <a href='/' className='font-bold'>
            List of best Soccer trics
          </a>
          <p className='my-1'>Lorem ipsum dolor sit.</p>
        </div>
        <p className='font-bold'>November 30 2023</p>
      </div>
    </section>
  )
}

export default PopularPost
