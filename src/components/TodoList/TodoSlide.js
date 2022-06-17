const initState = [
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
]

const todoReducer = (state = initState, action) => {
    switch(action.type) {
        case 'todoList/addTodo' :
            return [
                    ...state,
                    action.payload
                ]
        case 'todoList/toggleTodoStatus' :
            return state.map(todo => 
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            )
        default:
            return state;
    }

}

export default todoReducer