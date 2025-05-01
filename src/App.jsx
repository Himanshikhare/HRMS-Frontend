import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Home from './components/pages/Home'

import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Services from './components/pages/Services'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path: '/Signup',
    element: <Signup/>
  },
  {
    path: '/Services',
    element: <Services/>
  },
  {
    path: '/About',
    element: <About/>
  },
  {
    path: '/Contact',
    element: <Contact/>
  },

])

function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
