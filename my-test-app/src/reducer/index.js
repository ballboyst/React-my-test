const todoReducer = (state=[],action) =>{
    switch(action.type){
        case 'Add_Todo':
            return[
                ...state,
                {id:action.id,
                text:action.text,
                completed:false
                }
            ]
            case 'Todggle_Todo':
                return state.map(todo=>
                    (todo.id===action.id)
                    ? {...todo,completed: !todo.completed}
                    :todo
                )
            default:
                return state
    }
}
export default todoReducer