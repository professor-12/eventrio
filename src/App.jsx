import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  const route = createBrowserRouter([])

  return <RouterProvider router={route}></RouterProvider>
}

export default App
