// import { createStore  } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers = composeWithDevTools()

// const store = createStore(rootReducer,composeEnhancers);


// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/filtersSlice";
import todoReducer from "../components/TodoList/todoSlice";

const store = configureStore ({
    reducer:{
        filter:filtersReducer,
        todoList:todoReducer
    }
})
export default store;