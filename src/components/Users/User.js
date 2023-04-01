import React from 'react'

const User = ({ user, index }) => {
  console.log(user)
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>
        <div className='avatar'>
          <div className='w-12 h-12 rounded-full'>
            <img
              className='w-12 h-12 rounded'
              src={user?.imgURL}
              alt={user?.name}
            />
          </div>
        </div>
      </td>
      <td className='text-white'>
        <button className='bg-red-600 px-2 rounded mx-2'>block</button>
        <button className='bg-green-500 px-2 rounded mx-2'>make admin</button>
      </td>
    </tr>
  )
}

export default User
