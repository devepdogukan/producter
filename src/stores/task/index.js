import { LogWrappers } from '@/mocks/kanban'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const taskStore = (set, get) => ({
    items: LogWrappers,
    setItems: (items) => {
        set({ items })
    },
    pushIntoGroup: (group, data) => {
        set(({
            items: get().items.map((i) => {
                if (i.slug === group)
                    return { ...i, items: [data, ...i.items] }
                return i
            })
        }))
    }
})

const useTaskStore = create(
    persist(
        taskStore,
        {
            name: 'TASK__STORE'
        }
    )
)


export default useTaskStore