import React from 'react'
import { Link } from 'react-router-dom'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from '../../../../redux/actionCreators/tagActions'
import Loading from '../../../../components/Loading/Loading'

const AddTag = () => {
  const dispatch = useDispatch()
  const { loading, success, message } = useSelector((state) => state.addTag)
  const handleAddTag = (e) => {
    e.preventDefault()
    const tag = e.target.tag.value
    const description = e.target.description.value
    const theTag = {
      name: tag,
      description,
    }
    dispatch(addTag(theTag))
  }
  if (loading) {
    return <Loading />
  }
  console.log(success)
  return (
    <div>
      <DashboardContentHeader />
      <div className='flex justify-between items-center'>
        <h3>Add Tag</h3>
        <Link className='btn' to='/'>
          Show Tags
        </Link>
      </div>
      <form className='flex flex-col gap-4' onSubmit={handleAddTag}>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text text-lg'>Tag Name</span>
          </label>
          <input
            type='text'
            name='tag'
            placeholder='tag name'
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text text-lg'>tag Description</span>
          </label>
          <textarea
            placeholder='tag description'
            name='description'
            className='textarea textarea-bordered textarea-lg w-full'
          ></textarea>
        </div>
        {message && <p className='text-red-600'>{message}</p>}
        {success && <p className='text-green-400'>Tag successfully created</p>}
        <div>
          <button className='btn'>Add Tag</button>
        </div>
      </form>
    </div>
  )
}

export default AddTag
