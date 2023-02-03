import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        todo: [],
    },
    reducers:{
        addTask: (state, action)=>{
            state.todo.push(action.payload);
        },
        deleteTask: (state, action)=>{
            state.todo.splice(action.payload.id,1)
        }
    }
});

export const {addTask, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;