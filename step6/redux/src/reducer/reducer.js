function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REMOVE_ALL:
            return {
                ...sate,
                todos: [],
            }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
            defualt:
                return state;
    }
}

const INITIAL_STATE = { todos: [] };

function reducer2(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: getNewId(), title: action.title, priority: action.priority }
                ]
            }
    }
}