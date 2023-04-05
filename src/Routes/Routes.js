import { createBrowserRouter } from 'react-router-dom'
import FullNews from '../components/cards/FullNews'
import Main from '../layout/Main'
import AdminDashboard from '../Pages/AdminDashboard/AdminDashboard'
import Articles from '../Pages/AdminDashboard/Article/Articles/Articles'
import AddCategory from '../Pages/AdminDashboard/Category/AddCategory/AddCategory'
import Categories from '../Pages/AdminDashboard/Category/Cagegories/Categories'
import AddTag from '../Pages/AdminDashboard/Tag/AddTag/AddTag'
import Tags from '../Pages/AdminDashboard/Tag/Tags/Tags'
import Admins from '../Pages/AdminDashboard/User/Admins/Admins'
import AllUsers from '../Pages/AdminDashboard/User/AllUsers.js/AllUsers'
import Home from '../Pages/Home/Home'
import Subscribers from '../Pages/AdminDashboard/Subscribers/Subscribers'
import AddNewArticle from '../Pages/AdminDashboard/Article/AddNewArticle/AddNewArticle'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import Dashboard from '../Pages/AdminDashboard/Dashboard'
import MyArticles from '../Pages/AdminDashboard/Article/MyArticles/MyArticles'

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
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'articles/new-article',
        element: <AddNewArticle />,
      },
      {
        path: 'articles/my-articles',
        element: <MyArticles />,
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
      {
        path: 'admins',
        element: <Admins />,
      },
      {
        path: 'users',
        element: <AllUsers />,
      },
      {
        path: 'subscribers',
        element: <Subscribers />,
      },
    ],
  },
])

export default router
