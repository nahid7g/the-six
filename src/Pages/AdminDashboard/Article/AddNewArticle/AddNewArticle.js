import React, { useState, useRef, useMemo, useEffect } from 'react'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../../components/Loading/Loading'
import { addArticle } from '../../../../redux/actionCreators/articleActions'
import JoditEditor from 'jodit-react'
import { Navigate } from 'react-router-dom'

const AddNewArticle = () => {
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const dispatch = useDispatch()
  const { loading, data, message } = useSelector((state) => state.loggedInUser)

  const {
    loading: postLoading,
    success,
    message: postMessage,
  } = useSelector((state) => state.addNewArticle)

  const initialFormData = {
    title: '',
    thumbnail: null,
    thumbnailTitle: '',
    category: '',
    tags: '',
    article: '',
  }

  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    Navigate('articles')
    setFormData(initialFormData)
    setContent('')
  }, [success])

  const handleChange = (event) => {
    const { name, value, files } = event.target

    setFormData((prvData) => ({
      ...prvData,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const theFormData = new FormData()
    theFormData.append('author', data?.user._id)
    theFormData.append('title', formData.title)
    theFormData.append('thumbnail', formData.thumbnail)
    theFormData.append('thumbnailTitle', formData.thumbnailTitle)
    theFormData.append('category', formData.category)
    theFormData.append('tags', formData.tags)
    theFormData.append('article', content)
    dispatch(addArticle(theFormData))
  }
  if (loading || postLoading) {
    return <Loading />
  }
  return (
    <div>
      <DashboardContentHeader
        title='add article'
        linkTitle='see articles'
        link='articles'
      />
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Title</span>
          </label>
          <input
            type='text'
            placeholder='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Thumbnail</span>
          </label>
          <input
            type='file'
            name='thumbnail'
            onChange={handleChange}
            className='file-input file-input-bordered w-full max-w-xs'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Thumbnail title</span>
          </label>
          <input
            type='text'
            placeholder='thumbnail title'
            name='thumbnailTitle'
            value={formData.thumbnailTitle}
            onChange={handleChange}
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Select category</span>
          </label>
          <select
            name='category'
            value={formData.category}
            onChange={handleChange}
            className='select select-bordered w-full max-w-xs'
          >
            <option>Select category</option>
            <option>Football</option>
            <option>Soccer</option>
            <option>Tenis</option>
            <option>Cricket</option>
            <option defaultValue>Sports</option>
          </select>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Add tags</span>
          </label>
          <input
            type='text'
            name='tags'
            value={formData.tags}
            onChange={handleChange}
            className='input input-bordered'
            placeholder='Enter tags separated by commas'
          ></input>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Your Story</span>
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
        {message && <p className='text-red-600'>{message}</p>}
        {postMessage && <p className='text-red-600'>{postMessage}</p>}
        {success && (
          <p className='text-green-600'>New article successfully added</p>
        )}
        <div className='mt-6'>
          <button className='btn btn-active'>Post</button>
        </div>
      </form>
    </div>
  )
}

export default AddNewArticle
