import { useRecoilValue } from 'recoil'
import { useState } from 'react'
import { taskState } from '../../TaskAtoms'
import TaskListItem from './TaskListItem'
import type { Task, CSSProperties } from '../../../types'
import TaskModal from '../shared/TaskModal'
import { TASK_PROGRESS_ID, TASK_MODAL_TYPE } from '../../../constant/app'
import FilterTaskMenu from './FilterTaskMenu'
import { completedTaskSelector, uncompletedTasksSelector } from '../../TaskSelector'

const TaskList = () => {
  const task: Task[] = useRecoilValue(taskState)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const [filterType, setFilterType] = useState<string>('all')
  const completedTask = useRecoilValue<Task[]>(completedTaskSelector)
  const uncompletedTask = useRecoilValue<Task[]>(uncompletedTasksSelector)

  // const handleFilter = (filterType:string) =>{
  //   if(filterType=='completed'){
  //     completedTask.map((task:Task)=>{
  //       return <TaskListItem task={task} key={task.id} />
  //     })
  //   }else if(filterType=='uncompleted'){
  //     uncompletedTask.map((task:Task)=>{
  //       return <TaskListItem task={task} key={task.id} />
  //     })
  //   }else if(filterType=='all'){
  //     task.map((task:Task)=>{
  //       return <TaskListItem task={task} key={task.id} />
  //     })
  //   }
  // }

  // const handleFilter2 = {
  //   completed: completedTask.map((task: Task) => {
  //     return <TaskListItem task={task} key={task.id} />
  //   }),
  //   uncompleted: uncompletedTask.map((task: Task) => {
  //     return <TaskListItem task={task} key={task.id} />
  //   }),
  //   all: task.map((task: Task) => {
  //     return <TaskListItem task={task} key={task.id} />
  //   }),
  // }

  // const filterState({state}){
  //   return (
  //     <>
  //     {handleFilter2[state]}
  //     </>
  //   )
  // }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Tasks</h1>
      <div style={styles.taskButtons}>
        <button
          style={styles.button}
          onClick={(): void => {
            setIsModalOpen(true)
          }}
        >
          <span className="material-icons">add</span>
          Add task
        </button>
        {isFilterOpen && (
          <FilterTaskMenu setFilterType={setFilterType} setIsFilterOpen={setIsFilterOpen} />
        )}

        <button
          style={styles.button}
          onClick={(): void => {
            setIsFilterOpen(true)
          }}
        >
          <span className="material-icons">sort</span>Filter tasks
        </button>
      </div>
      {isModalOpen && (
        <TaskModal
          headingTitle="Add your task"
          type={TASK_MODAL_TYPE.ADD}
          setIsModalOpen={setIsModalOpen}
          defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
        />
      )}
      <div>
        <div style={styles.tableHead}>
          <div style={styles.tableHeaderTaskName}>Task Name</div>
          <div style={styles.tableHeaderDetail}>Detail</div>
          <div style={styles.tableHeaderDueDate}>Due Date</div>
          <div style={styles.tableHeaderProgress}>Progress</div>
        </div>
        {/* {task
          .filter((task) => task.progressOrder == filterType)
          .map((task: Task) => {
            return <TaskListItem task={task} key={task.id} />
          })} */}
        {/* {filterState(filterType)} */}

        {filterType == 'all'
          ? task.map((task: Task) => {
              return <TaskListItem task={task} key={task.id} />
            })
          : filterType == 'completed'
          ? completedTask.map((task: Task) => {
              return <TaskListItem task={task} key={task.id} />
            })
          : filterType == 'uncompleted'
          ? uncompletedTask.map((task: Task) => {
              return <TaskListItem task={task} key={task.id} />
            })
          : null}
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
  taskButtons: {
    display: 'flex',
    marginBottom: '30px',
    position: 'relative',
  },
  button: {
    padding: '16px',
    fontSize: '16px',
    marginRight: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  tableHead: {
    display: 'flex',
    fontSize: '24px',
    borderBottom: '1px solid #D8D8D8',
  },
  tableHeaderTaskName: {
    padding: '16px',
    width: '15%',
  },
  tableHeaderDetail: {
    padding: '16px',
    width: '30%',
  },
  tableHeaderDueDate: {
    padding: '16px',
    width: '10%',
  },
  tableHeaderProgress: {
    padding: '16px',
    width: '15%',
  },
}

export default TaskList
