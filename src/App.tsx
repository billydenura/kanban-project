import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideMenu from './component/SideMenu'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu />
      </div>
    ),
    children: [
      {
        path: '/',
        element: (
          <div style={{ display: 'flex' }}>
            <h1>Home</h1>,
          </div>
        ),
      },
      {
        path: 'task-list',
        element: (
          <div style={{ display: 'flex' }}>
            <h1>Task List</h1>,
          </div>
        ),
      },
      {
        path: 'task-progress',
        element: (
          <div style={{ display: 'flex' }}>
            <h1>Task Progress</h1>,
          </div>
        ),
      },
    ],
  },
])

function App(): JSX.Element {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
