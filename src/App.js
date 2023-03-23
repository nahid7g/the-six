import { RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register'
import router from './Routes/Routes'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
      <Login />
      <Register />
    </Provider>
  )
}

export default App
