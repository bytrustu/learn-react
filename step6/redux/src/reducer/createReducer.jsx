import produce from 'immer';


const reducer = createReducer(INITIAL_STATE, {
    [ADD]: (state, action) => state.todos.push(action.todo),
    [REMOVE_ALL]: state => (state.todos = []),
    [REMOVE]: (state, action) =>
        (state.todos = state.todos.filter(todo => todo.id !== action.id))
})

function createReducer2(initialState, handlerMap) {
    return function(state = initialState, action) {
        return produce(state, draft => {
            const handler = handlerMap[action.type];
            if (handler) {
                handler(draft, action);
            }
        })
    }
}