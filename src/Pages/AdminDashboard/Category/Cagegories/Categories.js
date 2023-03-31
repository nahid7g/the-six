import React from 'react'
import Category from '../../../../components/Category/Category'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'

const Categories = () => {
  return (
    <div>
      <DashboardContentHeader />
      <div className='flex flex-wrap gap-2 justify-around'>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  )
}

export default Categories
