// const initState = [
//         { 
//             id: 1,
//             name:'Learn JS',
//             completed: true, 
//             priority:'Low'
//         },
//         { 
//             id: 2,
//             name:'Learn ReactJs',
//             completed: false, 
//             priority:'High'
//         },
//         { 
//             id: 3,
//             name:'Learn Redux',
//             completed: false, 
//             priority:'Medium'
//         },
// ]

// const todoReducer = (state = initState, action) => {
//     switch(action.type) {
//         case 'todoList/addTodo' :
//             return [
//                     ...state,
//                     action.payload
//                 ]
//         case 'todoList/toggleTodoStatus' :
//             return state.map(todo => 
//                 todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
//             )
//         default:
//             return state;
//     }

// }

// export default todoReducer

import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name:'todoList',
    initState : [
                { 
                    id: 1,
                    name:'Learn JS',
                    completed: true, 
                    priority:'Low'
                },
                { 
                    id: 2,
                    name:'Learn ReactJs',
                    completed: false, 
                    priority:'High'
                },
                { 
                    id: 3,
                    name:'Learn Redux',
                    completed: false, 
                    priority:'Medium'
                },
        ],
    reducers: {
        addTodo:(state, action) => {
            state.pust(action.payload)
        },
        toggleTodoStatus:(state, action) => {
            const currentTodo = state.filter(todo => todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
        }
    }
})