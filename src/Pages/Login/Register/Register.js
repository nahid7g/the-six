import React from 'react'

const Register = () => {
  return (
    <>
      <input type='checkbox' id='register-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='register-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <form>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='Your Name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='Your Email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                placeholder='Your Password'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <input
                type='text'
                placeholder='Confirm Password'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='flex items-center gap-4 mt-3 cursor-pointer'>
                <input
                  type='checkbox'
                  checked
                  className='checkbox checkbox-primary'
                />
                <span className='label-text'>
                  I agree to the terms and conditions.
                </span>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
