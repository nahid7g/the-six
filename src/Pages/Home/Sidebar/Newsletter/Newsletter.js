import React from 'react'

const Newsletter = () => {
  return (
    <div className='border p-4'>
      <div className='border-t-8 border-indigo-700'>
        <h2 className='text-2xl my-3 ml-2 uppercase'>Newsletters</h2>
        <div className='border p-4'>
          <h2 className='text-sm font-bold'>Subscribe Now!</h2>
          <p className='text-sm'>
            You will get the latest sports updates and transfer news in your
            Email.
          </p>
          <form className='flex flex-col gap-4 my-5'>
            <div className='form-control'>
              <input
                type='text'
                placeholder='Your Name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <input
                type='email'
                placeholder='Your Email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <button className='btn btn-primary'>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
