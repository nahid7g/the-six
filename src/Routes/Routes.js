import FullNews from '../components/cards/FullNews'

const { createBrowserRouter } = require('react-router-dom')
const { default: Home } = require('../Pages/Home/Home')

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/article/:id',
    element: <FullNews />,
  },
])

export default router
