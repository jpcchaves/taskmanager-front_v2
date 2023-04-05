import {combineReducers} from "@reduxjs/toolkit";
import {userslice} from './userslice'


const reducers = combineReducers({
    user: userslice.reducer,
})

export default reducers;
