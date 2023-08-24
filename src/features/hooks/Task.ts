import { useRecoilState } from 'recoil'
import { taskState } from '../TaskAtoms'
import type { Task } from '../../types'
import { TASK_PROGRESS_ID } from '../../constant/app'

interface useTaskActionType {
  completeTask: (taskId: number) => void
  moveTask: (taskId: number, directionNumber:1 | -1) => void
  addTask: (
    title: string,
    detail: string,
    dueDate: string,
    progressOrder: number,
  ) => void
}

export const useTasksAction = (): useTaskActionType => {
  const [tasks, setTasks] = useRecoilState<Task[]>(taskState)

  const completeTask = (taskId: number): void => {
    const updatedTasks: Task[] = tasks.map((task) =>
    task.id === taskId
    ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED }
    : task,
    )
    setTasks(updatedTasks)
  }
  const moveTask = (taskId: number, directionNumber: 1 | -1):void =>{
    const updatedTasks: Task[] = tasks.map((task) =>
    task.id === taskId
      ? { ...task, progressOrder: task.progressOrder + directionNumber }
      : task,
    )
    setTasks(updatedTasks)
  }
  const addTask = (
    title: string,
    detail: string,
    dueDate: string,
    progressOrder: number,
  ): void => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      detail,
      dueDate,
      progressOrder,
    }
    setTasks([...tasks, newTask])
    
  }
  


  return {
    moveTask,
    completeTask,
    addTask
  }
}
