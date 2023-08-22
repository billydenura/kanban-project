import { useRecoilState } from 'recoil'
import { taskState } from '../TaskAtoms'
import type { Task } from '../../types'
import { TASK_PROGRESS_ID } from '../../constant/app'

interface useTaskActionType {
  completeTask: (taskId: number) => void
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

  return {
    completeTask,
  }
}