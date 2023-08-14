import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import type { Task, CSSProperties } from '../../types'
import { completedTaskSelector, uncompletedTasksSelector } from '../TaskSelector'

const TaskSummary = () => {
  const completedTask = useRecoilValue<Task[]>(completedTaskSelector)
  const uncompletedTask = useRecoilValue<Task[]>(uncompletedTasksSelector)
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Summary of Your Task</h1>
      <div style={styles.list}>
        <span className="material-icons">check_circle</span>
        <h2>
          you have completed {completedTask.length} {completedTask.length < 2 ? 'task' : 'tasks'}
        </h2>
      </div>
      <div style={styles.list}>
        <span className="material-icons">list</span>
        <h2>
          you have uncompleted {uncompletedTask.length}{' '}
          {uncompletedTask.length < 1 ? 'task' : 'tasks'} left
        </h2>
      </div>
      <div style={styles.links}>
        <Link to="/task-list" style={styles.link}>
          See Your Task List
        </Link>
        <Link to="task-progress" style={styles.link}>
          Manage Your Task Progress
        </Link>
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    padding: '40px',
    width: '50%',
  },
  heading: {
    color: '#55C89F',
    marginBottom: '60px',
  },
  list: {
    color: '#fff',
    backgroundColor: '#55C89F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
    // width: '60%',
  },
  links: {
    display: 'flex',
  },
  link: {
    padding: '16px',
    marginRight: '24px',
    backgroundColor: '#55ACC8',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
  },
}

export default TaskSummary
