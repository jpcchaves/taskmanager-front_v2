import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITasks} from "../../modules/admin/tasks/components/models/ITasks";

interface PayloadTasksList extends PayloadAction<ITasks[]> {
}

export interface TasksState {
    tasks: ITasks[],
}

const initialState: TasksState = {
    tasks: null,
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasks: (state, action: PayloadTasksList) => {
            state.tasks = action.payload
        },
    }
})

export const {setTasks} = taskSlice.actions;

export default taskSlice.reducer;

// selectors
export const selectTasksList = (state: { tasks: ITasks[]; }) => state.tasks;

