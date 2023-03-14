import React from 'react'

const NewsCard = ({ classess }) => {
  return (
    <div className={`${classess} shadow-xl p-4 border gap-6 my-4`}>
      <img
        src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/blog34-390x335.jpg'
        alt='Thumbnail'
        className={`${classess}`}
      />
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col gap-1'>
          <h5>Fifa News</h5>
          <a href='/'>The world championship</a>
          <div className='flex gap-3'>
            <p>10.10am</p>
            <p>December 5, 2016</p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            voluptate minus consequatur dolores ex ipsam voluptatem temporibus.
            Explicabo voluptates quibusdam dolor nesciunt nostrum dolores
            blanditiis? Iusto excepturi ab dolores laboriosam!
          </p>
          <a href='/'>read more</a>
        </div>
        <div className='divider'></div>
        <div className='flex gap-3 items-center text-sm'>
          <div className='flex gap-2 items-center'>
            <div className='avatar'>
              <div className='w-14 rounded-full'>
                <img src='http://1.gravatar.com/avatar/1ec59eae354306975b17d78e8473d78b?s=90&d=mm&r=g' />
              </div>
            </div>
            <h4>Admin</h4>
          </div>
          <div className='flex gap-1'>
            <p>AA</p>
            <p>1084 Views</p>
          </div>
          <div className='flex gap-1'>
            <p>cc</p>
            <p>0 Comment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
