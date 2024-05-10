import {combineReducers} from "@reduxjs/toolkit";
import resumeReducer from "../module/resume/core/resumeReducer";

export const rootReducer = combineReducers({
    resume: resumeReducer,
})