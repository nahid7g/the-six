import React from 'react'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../../../redux/actionCreators/categoryActions'
import Loading from '../../../../components/Loading/Loading'

const AddCategory = () => {
  const { loading, success, message } = useSelector(
    (state) => state.addCategory
  )
  const dispatch = useDispatch()
  const handleAddCategory = (e) => {
    e.preventDefault()
    const category = e.target.category.value
    const description = e.target.description.value
    const theCategory = {
      name: category,
      description,
    }
    dispatch(addCategory(theCategory))
  }
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <DashboardContentHeader
        title='add category'
        linkTitle='all categories'
        link='categories'
      />
      <form className='flex flex-col gap-4' onSubmit={handleAddCategory}>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text text-lg'>Category Name</span>
          </label>
          <input
            type='text'
            placeholder='category name'
            name='category'
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text text-lg'>Category Description</span>
          </label>
          <textarea
            placeholder='category description'
            name='description'
            className='textarea textarea-bordered textarea-lg w-full'
          ></textarea>
        </div>
        {message && <p className='text-red-600'>{message}</p>}
        {success && (
          <p className='text-green-400'>Category successfully created</p>
        )}
        <div>
          <button className='btn'>Add Article</button>
        </div>
      </form>
    </div>
  )
}

export default AddCategory
