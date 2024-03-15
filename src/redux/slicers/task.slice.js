import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    taskList: []
}
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTaskList: (state, action) => {
            const { data } = action.payload
            const newTask = {
                id: uuidv4(),
                tittle: data.tittle,
                content: data.content,
                year: data.year
            }
            const newTaskList = [newTask, ...state.taskList]
            state.taskList = newTaskList
        },
        updateTaskList: (state, action) => {
            const { id, data } = action.payload
            const index = state.taskList.findIndex((item) => item.id === id)
            const newTask = [...state.taskList]
            newTask.splice(index, 1, {
                id: data.id,
                tittle: data.tittle,
                content: data.content,
                year: data.year
            })
            state.taskList = newTask
        },
        deleteTaskList: (state, action) => {
            const { id } = action.payload
            const newTaskList = state.taskList.filter((item) => item.id !== id)
            state.taskList = newTaskList
        }
    }
})
export const { addTaskList, updateTaskList, deleteTaskList } = taskSlice.actions

export default taskSlice.reducer