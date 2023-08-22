import { selector } from 'recoil'
import { taskState } from './TaskAtoms'
import type { Task } from '../types'
import { SelectorKeys } from '../constant/recoilKeys'

export const uncompletedTasksSelector = selector<Task[]>({
  key: SelectorKeys.UNCOMPLETED_TASKS,
  get: ({ get }) => {
    return get(taskState).filter((task) => {
      return task.progressOrder != 4
    })
  },
})

export const completedTaskSelector = selector<Task[]>({
  key: SelectorKeys.COMPLETED_TASKS,
  get: ({ get }) => {
    return get(taskState).filter((task) => {
      return task.progressOrder == 4
    })
  },
})

export const notStartedTasksSelector = selector<Task[]>({
  key: SelectorKeys.NOT_STARTED_TASKS,
  get: ({ get }) => {
    return get(taskState).filter((task) => {
      return task.progressOrder == 1
    })
  },
})

export const inProgressTasksSelector = selector<Task[]>({
  key: SelectorKeys.IN_PROGRESS_TASKS,
  get: ({ get }) => {
    return get(taskState).filter((task) => {
      return task.progressOrder == 2
    })
  },
})

export const waitingTasksSelector = selector<Task[]>({
  key: SelectorKeys.WAITING_TASKS,
  get: ({ get }) => {
    return get(taskState).filter((task) => {
      return task.progressOrder == 3
    })
  },
})
