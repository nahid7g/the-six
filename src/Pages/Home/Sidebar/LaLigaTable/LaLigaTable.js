import React from 'react'
import PointTableCard from '../../../../components/cards/PointTableCard'

const LaLigaTable = () => {
  return (
    <div className='border'>
      <div className='border-t-8 border-indigo-700'>
        <h2 className='text-2xl my-3 ml-2'>La Liga Table</h2>
        <PointTableCard />
      </div>
    </div>
  )
}

export default LaLigaTable
