import React, { useEffect } from 'react'
import {
  FaComment,
  FaEye,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
  getArticleById,
  postComment,
} from '../../redux/actionCreators/articleActions'
import Comments from '../Comments/Comments'
import GetDate from '../DateTime/GetDate'
import GetTime from '../DateTime/GetTime'
import Loading from '../Loading/Loading'
import Newsletter from '../Newsletter/Newsletter'
import PopularPosts from '../PopularPosts/PopularPosts'

const FullNews = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { loading, data, message } = useSelector((state) => state.article)
  const { loading: commentLoading, success } = useSelector(
    (state) => state.postComment
  )

  const {
    loading: userLoading,
    data: userData,
    message: userMessage,
  } = useSelector((state) => state.loggedInUser)

  useEffect(() => {
    dispatch(getArticleById(id))
  }, [id, dispatch, success])

  const handleComment = (e) => {
    e.preventDefault()
    const comment = e.target.comment.value
    const theComment = {
      comment,
    }
    dispatch(postComment(id, theComment))
  }

  if (loading || userLoading) {
    return <Loading />
  }
  console.log(data)
  return (
    <section className='md:container p-5 min-h-screen'>
      <Link className='btn btn-primary my-2' to='/'>
        Go Back
      </Link>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {userMessage && (
          <h2 className='text-center text-red-600 my-8'>{userMessage}</h2>
        )}
        <div className='shadow-xl gap-6 text-sm lg:col-span-2'>
          <div>
            <div>
              <img
                src={data?.data?.thumbnail}
                alt={data?.data?.title}
                className='w-full'
              />
              <p className='text-xs m-2'>{data?.data?.thumbnailTitle}</p>
            </div>
            <div className='p-4'>
              <div className='flex justify-between p-2 gap-3 items-center text-xs'>
                <div className='flex gap-2 items-center'>
                  <div className='avatar'>
                    <div className='w-10 rounded-full'>
                      <img
                        src={userData?.user?.imgURL}
                        alt={userData?.user?.name}
                      />
                    </div>
                  </div>
                  <h4>{userData?.user?.name}</h4>
                </div>
                <div className='flex gap-x-4 text-sm'>
                  <div className='flex gap-2 items-center cursor-pointer'>
                    <p>
                      <FaEye />
                    </p>
                    <p>{data?.data?.views}</p>
                  </div>
                  <div className='flex gap-2 items-center cursor-pointer'>
                    <p>
                      <FaComment />
                    </p>
                    <p>{data?.data?.comments?.length}</p>
                  </div>
                </div>
              </div>
              <div className='title mt-2 mb-4'>
                <h2 className='text-3xl font-semibold'>{data?.data?.title}</h2>
              </div>
              <div className='divider mt-0'></div>
              <h3 className='text-sm font-bold flex gap-2'>
                <p>{GetDate(data?.data?.createdAt)}</p>
                <p>{GetTime(data?.data?.createdAt)}</p>
              </h3>
              <article className='text-sm'>{data?.data?.article}</article>
              <div className='divider'></div>
              <div className='flex flex-col gap-4 md:flex-row justify-between items-center'>
                <div className='flex flex-wrap gap-2'>
                  <button className='btn btn-outline'>News</button>
                  <button className='btn btn-outline'>Soccer</button>
                  <button className='btn btn-outline'>Ultimaet kickoff</button>
                  <button className='btn btn-outline'>World</button>
                </div>
                <ul className='flex flex-wrap gap-3'>
                  <li>
                    <button className='btn btn-outline'>
                      <FaFacebookF />
                    </button>
                  </li>
                  <li>
                    <button className='btn btn-outline'>
                      <FaTwitter />
                    </button>
                  </li>
                  <li>
                    <button className='btn btn-outline'>
                      <FaInstagram />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <h2 className='text-xl px-8 py-2'>
              <span className='bg-cyan-700 py-4 pl-2 pr-12 text-white'>
                Leave a comment
              </span>
            </h2>
            {userData?.user ? (
              <form className='p-8' onSubmit={handleComment}>
                <input
                  type='text'
                  name='comment'
                  placeholder='Type here'
                  className='input input-bordered input-lg w-full max-w-lg'
                />
                {commentLoading && <Loading />}
                <p>
                  <button type='submit' className='btn my-2'>
                    Post Comment
                  </button>
                </p>
              </form>
            ) : (
              <p className='text-lg px-8 py-2 my-4'>
                Please login to <span className='text-cyan-600'>comment</span>
              </p>
            )}
            <div className='flex flex-col gap-4 px-8'>
              {data?.data?.comments?.map((comment) => (
                <Comments comment={comment} key={comment._id} />
              ))}
              {data?.data?.comments?.length === 0 && (
                <p className='text-lg text-gray-400'>
                  This article has no comment
                </p>
              )}
            </div>
          </div>
        </div>
        {/* Sidebar  */}
        <div className='flex flex-col gap-8'>
          <Newsletter />
        </div>
      </div>
    </section>
  )
}

export default FullNews
