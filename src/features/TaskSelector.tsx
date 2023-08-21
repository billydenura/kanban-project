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

export const notStartedTasksSelector = selector<Task[]>({
  key: 'not_startes_task',
  get: ({ get }) => {
    return get(taskState).filter((task) => {
      return task.progressOrder == 1
    })
  },
})

export const inProgressTasksSelector = selector<Task[]>({
  key: 'in_progress_task',
  get: ({ get }) => {
    return get(taskState).filter((task) => {
      return task.progressOrder == 2
    })
  },
})

export const waitingTasksSelector = selector<Task[]>({
  key: 'waiting_task',
  get: ({ get }) => {
    return get(taskState).filter((task) => {
      return task.progressOrder == 3
    })
  },
})
