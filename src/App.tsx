import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import SideBarLayout from './layouts/SideBarLayout'
import TaskSummary from './features/components/TaskSummary'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SideBarLayout />,
    children: [
      {
        path: '/',
        element: <TaskSummary />,
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
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
