import React from 'react'

const Comments = () => {
  return (
    <div className='flex items-center gap-2'>
      <div>
        <img
          src='https://fea.assettype.com/quintype-metype/assets/icons/author-b1d7806ace0e485f0f7374762a004506a82bec54e49e5cf9a38fde56bc1f0ae6.png'
          alt='aa'
        />
      </div>
      <div className='flex flex-col'>
        <div className='flex gap-4 items-center'>
          <p className='text-sm'>Nahid Hasan</p>
          <p className='text-xs'>Today 5.45am</p>
        </div>
        <p className='text-xs'>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
      </div>
    </div>
  )
}

export default Comments
