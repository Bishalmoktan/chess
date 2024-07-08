import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Landing from "./components/Landing"
import Game from './components/Game'


const router = createBrowserRouter([
  {
    path: "",
    element: <Landing />
  }, 
  {
    path: "/game",
    element: <Game />
  }
])

function App() {

  return (
    <div className='bg-black h-screen'> 
    <RouterProvider router={router} />
    </div>
  )
}

export default App
