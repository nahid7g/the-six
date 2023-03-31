import { createBrowserRouter } from 'react-router-dom'
import FullNews from '../components/cards/FullNews'
import Main from '../layout/Main'
import AdminDashboard from '../Pages/AdminDashboard/AdminDashboard'
import Articles from '../Pages/AdminDashboard/Article/Articles/Articles'
import AddCategory from '../Pages/AdminDashboard/Category/AddCategory/AddCategory'
import Categories from '../Pages/AdminDashboard/Category/Cagegories/Categories'
import AddTag from '../Pages/AdminDashboard/Tag/AddTag/AddTag'
import Tags from '../Pages/AdminDashboard/Tag/Tags/Tags'
import Home from '../Pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'article/:id',
        element: <FullNews />,
      },
    ],
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />,
    children: [
      {
        path: '',
        element: <p>Hello</p>,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'add-category',
        element: <AddCategory />,
      },
      {
        path: 'tags',
        element: <Tags />,
      },
      {
        path: 'add-tag',
        element: <AddTag />,
      },
    ],
  },
])

export default router
