import React from 'react'
import { FaComment, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import GetDate from '../DateTime/GetDate'
import GetTime from '../DateTime/GetTime'

const NewsCard = ({ classess, orderClass, article }) => {
  return (
    <div className={`${classess} shadow-xl border gap-6 text-sm`}>
      <Link to={`/article/${article?._id}`}>
        <img
          src={article?.thumbnail}
          alt={article?.title}
          className={`${orderClass} w-full`}
        />
      </Link>
      <div className='flex flex-col justify-between p-4'>
        <div className='flex flex-col gap-1'>
          <h5 className='text-red-600'>
            {article.category ? article.category : <span>Fifa News</span>}
          </h5>
          <Link to={`/article/${article?._id}`} className='text-lg font-bold'>
            {article?.title?.length > 50
              ? article?.title + '...'
              : article?.title}
          </Link>
          <div className='flex gap-3'>
            <p>{GetDate(article?.createdAt)}</p>
            <p>{GetTime(article?.createdAt)}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 my-2'>
          <p>
            {article?.article?.length > 300
              ? article?.article + '...'
              : article?.article}
          </p>
          <Link to={`/article/${article?._id}`} className='text-blue-600'>
            read more
          </Link>
        </div>
        <div className='divider'></div>
        <div className='flex justify-between gap-3 items-center text-xs'>
          <div className='flex gap-2 items-center cursor-pointer'>
            <div className='avatar'>
              <div className='w-10 rounded-full'>
                <img src={article?.author?.imgURL} alt={article?.title} />
              </div>
            </div>
            <h4>{article?.author?.name}</h4>
          </div>
          <div className='flex gap-4'>
            <div className='flex gap-1 cursor-pointer'>
              <p>
                <FaEye />
              </p>
              <p>{article?.views}</p>
            </div>
            <div className='flex gap-1 cursor-pointer'>
              <p>
                <FaComment />
              </p>
              <p>{article?.comments?.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
