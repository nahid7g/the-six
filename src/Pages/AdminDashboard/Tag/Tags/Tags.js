import React from 'react'
import Category from '../../../../components/Category/Category'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'

const Tags = () => {
  return (
    <>
      <DashboardContentHeader />
      <div className='flex flex-wrap gap-2 justify-around'>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </>
  )
}

export default Tags
