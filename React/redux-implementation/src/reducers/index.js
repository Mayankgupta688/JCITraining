import { combineReducers } from "redux";

import employeesReducer from "./employeesReducer";
import moviesReducer from "./moviesReducer";

var rootReducer = combineReducers({
     movies: moviesReducer,
     employees: employeesReducer   
})

export default rootReducer;