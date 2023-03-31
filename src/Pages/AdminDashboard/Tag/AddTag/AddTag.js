import React from 'react'
import { Link } from 'react-router-dom'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'

const AddTag = () => {
  return (
    <div>
      <DashboardContentHeader />
      <div className='flex justify-between items-center'>
        <h3>Add Tag</h3>
        <Link className='btn' to='/'>
          Show Tags
        </Link>
      </div>
      <form className='flex flex-col gap-4'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text text-lg'>Tag Name</span>
          </label>
          <input
            type='text'
            placeholder='tag name'
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text text-lg'>tag Description</span>
          </label>
          <textarea
            placeholder='category description'
            className='textarea textarea-bordered textarea-lg w-full'
          ></textarea>
        </div>
        <div>
          <button className='btn'>Add Tag</button>
        </div>
      </form>
    </div>
  )
}

export default AddTag
