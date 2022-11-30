import { configureStore } from '@reduxjs/toolkit'
import {driveReducer} from "./driveReducer";


export const store =  configureStore({
    reducer: {
        drive: driveReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch