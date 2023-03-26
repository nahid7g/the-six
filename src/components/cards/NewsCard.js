import React from 'react'
import { FaComment, FaEye } from 'react-icons/fa'

const NewsCard = ({ classess, orderClass, article }) => {
  return (
    <div className={`${classess} shadow-xl p-4 border gap-6 text-sm`}>
      <img
        src={article?.thumbnail}
        alt={article?.title}
        className={`${orderClass} w-full`}
      />
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col gap-1'>
          <h5>Fifa News</h5>
          <a href='/' className='text-lg font-bold'>
            {article?.title?.length > 50
              ? article?.title + '...'
              : article?.title}
          </a>
          <div className='flex gap-3'>
            <p>{article.createdAt.split('T')[1].slice(0, 5)}am</p>
            <p>{article.createdAt.slice(0, 10)}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p>
            {article?.article?.length > 300
              ? article?.article + '...'
              : article?.article}
          </p>
          <a href='/' className='text-blue-600'>
            read more
          </a>
        </div>
        <div className='divider'></div>
      </div>
    </div>
  )
}

export default NewsCard
