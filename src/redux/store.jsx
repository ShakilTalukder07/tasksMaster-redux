import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features.js/tasks/tasksSlice";

const store = configureStore({
    reducer: {
        tasks: tasksSlice,
    },
})

export default store;