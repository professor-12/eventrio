import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Auth from './layouts/Auth'
import LoginPage from './pages/login'
import Regsiter from './pages/register'

function App() {
  const _route = createBrowserRouter(
    [
      {
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
      },
      { path: "", element: <div>Hello world</div> },
      { path: "*", element: <div>404 page not found it seems you are lost</div> },
    ]
  )
  return <RouterProvider router={_route} />
}

export default App
