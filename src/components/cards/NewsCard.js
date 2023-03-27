import React from 'react'
import { FaComment, FaEye } from 'react-icons/fa'

const NewsCard = ({ classess, orderClass, article }) => {
  const getDate = (iso) => {
    const date = new Date(iso)
    const longDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    return longDate
  }
  const getTime = (iso) => {
    const date = new Date(iso)
    const time = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
    return time
  }
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
            <p>{getDate(article?.createdAt)}</p>
            <p>{getTime(article?.createdAt)}</p>
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
        <div className='flex gap-3 items-center text-xs'>
          <div className='flex gap-2 items-center'>
            <div className='avatar'>
              <div className='w-10 rounded-full'>
                <img src='http://1.gravatar.com/avatar/1ec59eae354306975b17d78e8473d78b?s=90&d=mm&r=g' />
              </div>
            </div>
            <h4>Admin</h4>
          </div>
          <div className='flex gap-1'>
            <p>
              <FaEye />
            </p>
            <p>1084</p>
          </div>
          <div className='flex gap-1'>
            <p>
              <FaComment />
            </p>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
