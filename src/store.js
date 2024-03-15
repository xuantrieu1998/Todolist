import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./redux/slicers/task.slice";
export const store = configureStore({
    reducer: {
        task: taskReducer
    }
})