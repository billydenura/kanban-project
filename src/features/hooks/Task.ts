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
  ) => void,
  editTask: (
    title: string,
    detail: string,
    dueDate: string,
    progressOrder: number,
    id:number
  ) => void
  removeTask:(taskId:number)=>void
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
  const editTask = (
    title: string,
    detail: string,
    dueDate: string,
    progressOrder: number,
    id: number
  ): void => {
    const taskId = id
    const editedTask: Task = {
      id,
      title,
      detail,
      dueDate,
      progressOrder,
    }    
    const updatedTasks: Task[] = tasks.map((task) =>
    task.id === taskId
    ? { ...task, editedTask }
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
  const removeTask = (taskId:number):void=>{
    const newTasks = tasks.filter((task)=>task.id != taskId)
    setTasks(newTasks)
    console.log("tertekan di useTaskAction")
  }

  return {
    moveTask,
    completeTask,
    addTask,
    editTask,
    removeTask
  }
}
