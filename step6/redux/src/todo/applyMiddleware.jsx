const applyMiddleware = (...middlewares) => createStore => (...args) => {
    const store = createStore(...args);
    const funcsWithStore = middlewares.map(middleware => middleware(store));
    const chainedFunc = funcsWithStore.reduce((a, b) => next => a(b(next)));
    return {
        ...store,
        dispatch: chainedFunc(store.dispatch)
    }
}