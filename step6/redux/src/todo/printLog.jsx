const printLog = store => next => action => {
    console.log(`prev state = ${store.getState()}`);
    const result = next(action);
    console.log(`next state = ${store.getState()}`);
    return result;
}

const reportCrash = store => next => action => {
    try {
        return next(action);
    } catch (err) {
        console.log(err)
    }
}

const delayAction = store => next => action => {
    const delay = action.meta && action.meta.delay;
    if (!delay) {
        return next(action);
    }
    const timeoutId = setTimeout(() => next(action), delay);
    return function cancel() {
        clearTimeout(timeoutId);
    }
}

const cancel = store.disptach({
    type: 'SomeAction',
    meta: { delay: 1000 },
})
cancel();

const saveToLocalStorage = store => next => action => {
    if (action.type === 'SET_NAME') {
        localStorage.setItem('name', action.name);
    }
    return next(action);
}
