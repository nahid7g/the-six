import React from 'react'
import PopularPost from './PopularPost/PopularPost'

const PopularPosts = () => {
  return (
    <div className='border p-4'>
      <div className='border-t-8 border-indigo-700'>
        <h2 className='text-2xl my-3 ml-2'>Popular News</h2>
        <div className='flex flex-col gap-4'>
          <PopularPost />
          <PopularPost />
          <PopularPost />
          <PopularPost />
          <PopularPost />
        </div>
      </div>
    </div>
  )
}

export default PopularPosts
