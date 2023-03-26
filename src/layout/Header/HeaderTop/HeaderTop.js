import React, { useEffect } from 'react'
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaUserAlt,
  FaFacebookF,
  FaSistrix,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { loggedInUser, logout } from '../../../redux/actionCreators/userActions'
import '../Header.css'

const HeaderTop = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.loggedInUser)
  useEffect(() => {
    dispatch(loggedInUser())
  }, [dispatch])
  return (
    <div className='header-top py-5 my-0 bg-neutral text-white'>
      <div className='container flex justify-between items-center'>
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
            {data?.user ? (
              <>
                <button
                  className='btn btn-secondary'
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <label htmlFor='login-modal' className='btn'>
                  <li>
                    <span className='inline-grid mr-2'>
                      <FaUserAlt />
                    </span>
                    login
                  </li>
                </label>
                <label htmlFor='register-modal' className='btn'>
                  <li>
                    <span className='inline-grid mr-2'>
                      <FaUserAlt />
                    </span>
                    Register
                  </li>
                </label>
              </>
            )}
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
          {data?.user ? (
            <>
              <button
                className='btn btn-secondary'
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <label htmlFor='login-modal' className='btn'>
                <li>
                  <span className='inline-grid mr-2'>
                    <FaUserAlt />
                  </span>
                  login
                </li>
              </label>
              <label htmlFor='register-modal' className='btn'>
                <li>
                  <span className='inline-grid mr-2'>
                    <FaUserAlt />
                  </span>
                  Register
                </li>
              </label>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default HeaderTop
