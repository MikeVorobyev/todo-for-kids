import { create } from "zustand";
import { persist } from "zustand/middleware";

const useToDoStore = create(
    persist(
        (set) => ({
            arrayToDoList: [],
        
            addTask: (task) => set((state) => ({arrayToDoList: [...state.arrayToDoList, {
                id: task.id,
                text: task.text,
                completed: task.completed,
                stampRotate: task.stampRotate,
                stampHorizontal: task.stampHorizontal,
                hours_stamp_store: '',
                minutes_stamp_store: '',
                year_stamp_store: '',
                month_stamp_store: '',
                day_stamp_store: '',
            }]})),
        
            checkTaskId: (check) => {set((state) => ({arrayToDoList: [...state.arrayToDoList.map((e) => e.id === check.id 
                ? {
                    id: e.id,
                    text: e.text,
                    completed: !e.completed,
                    stampRotate: check.stampRotate,
                    stampHorizontal: check.stampHorizontal,
                    hours_stamp_store: check.hours_stamp_store,
                    minutes_stamp_store: check.minutes_stamp_store,
                    year_stamp_store: check.year_stamp_store,
                    month_stamp_store: check.month_stamp_store,
                    day_stamp_store: check.day_stamp_store
                } 
                : e)
            ] }))},
        
            deleteTask: (id) => set((state) => ({arrayToDoList: [...state.arrayToDoList.filter((e) => e.id !== id)]}))
        }),

        {
            name: 'todos-storage',
            getStorage: () => localStorage
        }
    )
)

export default useToDoStore