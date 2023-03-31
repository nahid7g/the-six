import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='navbar px-4'>
      <div className='navbar-start'>
        <Link to className='btn btn-ghost normal-case text-xl'>
          daisyUI
        </Link>
      </div>
      <div className='navbar-center'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered'
          />
        </div>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                alt='aa'
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </Link>
            </li>
            <li>
              <Link to>Settings</Link>
            </li>
            <li>
              <Link to>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
