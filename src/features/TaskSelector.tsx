import { selector } from 'recoil'
import { taskState } from './TaskAtoms'
import type { Task } from '../types'

export const uncompletedTasksSelector = selector<Task[]>({
  key: 'uncompleted_task',
  get: ({ get }) => {
    return get(taskState).filter((task) => {
      return task.progressOrder != 4
    })
  },
})

export const completedTaskSelector = selector<Task[]>({
  key: 'completed_task',
  get: ({ get }) => {
    return get(taskState).filter((task) => {
      return task.progressOrder == 4
    })
  },
})
