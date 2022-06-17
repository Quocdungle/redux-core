import { combineReducers } from "redux"
import filtersSlice from "../components/Filters/filtersSlice"
import todoListSlice from "../components/TodoList/todoSlice"


// const rootReducer = (state ={}, action) => {
//     return{
//         filters: filtersReducer(state.filters,action),
//         todoList: todoReducer(state.todoList,action)
//     }
// }

const rootReducer = combineReducers({
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
})

export default rootReducer