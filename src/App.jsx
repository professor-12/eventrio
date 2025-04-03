import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Auth from './layouts/Auth'
import LoginPage from './pages/login.page'
import Regsiter from './pages/register.page'

function App() {
  const route = createBrowserRouter([{
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "register",
        element: <Regsiter />
      },
    ]
  }])
  return <RouterProvider router={route}></RouterProvider>
}

export default App
