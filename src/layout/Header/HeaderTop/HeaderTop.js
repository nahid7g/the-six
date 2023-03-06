import React from 'react'
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaUserAlt,
  FaFacebookF,
  FaSistrix,
} from 'react-icons/fa'
import '../Header.css'

const HeaderTop = () => {
  return (
    <div className='header-top py-5 my-0 bg-neutral text-white'>
      <div className='container flex justify-between'>
        <div className='w-6/12 sm:w-8/12'>
          <ul className='flex gap-3'>
            <li>
              <a href='/'>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href='/'>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='/'>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href='/'>
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href='/'>
                <FaDiscord />
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden sm:block'>
          <ul className='flex gap-4 uppercase'>
            <li>
              <a href='/'>
                <span className='inline-grid mr-2'>
                  <FaUserAlt />
                </span>
                login
              </a>
            </li>
            <li>
              <a href='/'>
                <span className='inline-grid mr-2'>
                  <FaUserAlt />
                </span>
                Register
              </a>
            </li>
          </ul>
        </div>
        <div className='text-xl'>
          <span>
            <FaSistrix />
          </span>
        </div>
      </div>
      {/* Login/Register on small screen  */}
      <div className='sm:hidden flex justify-center sm:order-last my-4'>
        <ul className='flex gap-4 uppercase'>
          <li>
            <a href='/'>
              <span className='inline-grid mr-2'>
                <FaUserAlt />
              </span>
              login
            </a>
          </li>
          <li>
            <a href='/'>
              <span className='inline-grid mr-2'>
                <FaUserAlt />
              </span>
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderTop
