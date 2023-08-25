import { useRecoilValue } from 'recoil'
import {
  notStartedTasksSelector,
  inProgressTasksSelector,
  waitingTasksSelector,
  completedTaskSelector,
} from '../../TaskSelector'
import { TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from '../../../constant/app'
import TaskColumn from './TaskColumn'
import type { Task, CSSProperties } from '../../../types'

const TaskProgress = (): JSX.Element => {
  const notStartedTasks: Task[] = useRecoilValue(notStartedTasksSelector)

  const inProgressTasks: Task[] = useRecoilValue(inProgressTasksSelector)

  const waitingTasks: Task[] = useRecoilValue(waitingTasksSelector)

  const completedTasks: Task[] = useRecoilValue(completedTaskSelector)

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Task Progress</h1>
      <div style={styles.taskCategories}>
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.NOT_STARTED}
          tasks={notStartedTasks}
          columnId={TASK_PROGRESS_ID.NOT_STARTED}
        />
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.IN_PROGRESS}
          tasks={inProgressTasks}
          columnId={TASK_PROGRESS_ID.IN_PROGRESS}
        />
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.WAITING}
          tasks={waitingTasks}
          columnId={TASK_PROGRESS_ID.WAITING}
        />
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.COMPLETED}
          tasks={completedTasks}
          columnId={TASK_PROGRESS_ID.COMPLETED}
        />
      </div>
    </div>
  )
}
const styles: CSSProperties = {
  container: {
    padding: '20px',
  },
  heading: {
    color: '#55C89F',
    marginBottom: '60px',
  },
  taskCategories: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}

export default TaskProgress
