import React from 'react'
import { Link } from 'react-router-dom'

const DashboardContentHeader = () => {
  return (
    <div className='navbar bg-sky-300 mb-4'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 w-52'
          >
            <div className='form-control'>
              <input
                type='text'
                placeholder='Search'
                className='input input-bordered'
              />
            </div>
          </ul>
        </div>
        <Link to className='btn btn-ghost normal-case text-xl'>
          Articles(7)
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered'
          />
        </div>
      </div>
      <div className='navbar-end'>
        <Link to className='btn'>
          Add article
        </Link>
      </div>
    </div>
  )
}

export default DashboardContentHeader
