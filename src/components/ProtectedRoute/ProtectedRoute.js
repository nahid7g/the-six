import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { loggedInUser } from '../../redux/actionCreators/userActions'
import Loading from '../Loading/Loading'

const ProtectedRoute = ({ children }) => {
  const { loading, data } = useSelector((state) => state.loggedInUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loggedInUser())
  }, [dispatch])
  if (loading) {
    return <Loading />
  }
  if (data?.user && data?.user._id) {
    return children
  }
  return <Navigate to='/' />
}

export default ProtectedRoute
