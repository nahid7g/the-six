import React from 'react'
import '../Header.css'

const HeaderMenu = () => {
  const menu = (
    <>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/'>Football</a>
      </li>
      <li>
        <a href='/'>Cricket</a>
      </li>
      <li>
        <a href='/'>Tennis</a>
      </li>
    </>
  )
  return (
    <div className='navbar m-0 p-0'>
      <div className='navbar-start w-7/12'>
        <div className='dropdown order-last'>
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
            className='menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-black text-white'
          >
            {menu}
          </ul>
        </div>
        <div className='flex-1 logo py-3'>
          <a href='/' className='btn btn-ghost'>
            <img
              className='w-9/12'
              src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2017/03/Ultimate-Soccer.png'
              alt='logo'
            />
          </a>
        </div>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 font-bold'>{menu}</ul>
      </div>
    </div>
    // <div className='navbar m-0 p-0'>
    //   <div className='w-full'>
    // <div className='flex-1 logo p-5'>
    //   <a href='/' className='btn btn-ghost normal-case text-xl'>
    //     The Six
    //   </a>
    // </div>
    //     <div className='flex-none'>
    // <ul className='menu menu-horizontal px-1'>
    //   <li>
    //     <a href='/'>Home</a>
    //   </li>
    //   <li>
    //     <a href='/'>Football</a>
    //   </li>
    //   <li>
    //     <a href='/'>Cricket</a>
    //   </li>
    //   <li>
    //     <a href='/'>Tennis</a>
    //   </li>
    // </ul>
    //     </div>
    //   </div>
    // </div>
  )
}

export default HeaderMenu
