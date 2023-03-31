import React from 'react'
import { Link } from 'react-router-dom'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'

const AddCategory = () => {
  return (
    <div>
      <DashboardContentHeader />
      <div className='flex justify-between items-center'>
        <h3>Add Category</h3>
        <Link className='btn' to='/'>
          Show Category
        </Link>
      </div>
      <form className='flex flex-col gap-4'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text text-lg'>Category Name</span>
          </label>
          <input
            type='text'
            placeholder='category name'
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text text-lg'>Category Description</span>
          </label>
          <textarea
            placeholder='category description'
            className='textarea textarea-bordered textarea-lg w-full'
          ></textarea>
        </div>
        <div>
          <button className='btn'>Add Article</button>
        </div>
      </form>
    </div>
  )
}

export default AddCategory
