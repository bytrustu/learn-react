import { createStore, applyMiddleware } from 'redux'

const myMiddleware1 = store => next => action => {
    console.log('middleware1 start');
    const result = next(action)
    console.log('middleware1 end')
    return result;
}

const myMiddleware2 = store => next => action => {
    console.log('middleware2 start');
    const result = next(action)
    console.log('middleware2 end')
    return result;
}

const myReducer = (state, action) => {
    console.log('myReducer');
    return state;
}

const store = createStore(myReducer, applyMiddleware(myMiddleware1, myMiddleware2));
store.dispatch({ type: 'someAction' })
