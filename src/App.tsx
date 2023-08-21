import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import SideBarLayout from './layouts/SideBarLayout'
import TaskSummary from './features/components/TaskSummary'
import TaskList from './features/components/taskLisk/TaskList'
import TaskProgress from './features/components/TaskProgress/TaskProgress'

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
        element: <TaskList />,
      },
      {
        path: 'task-progress',
        element: <TaskProgress />,
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
