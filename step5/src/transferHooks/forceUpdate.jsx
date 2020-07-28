import React, {useReducer} from 'react';

function UpdateComponent() {
    const [_, forceUpdate] = useReducer(s => s + 1, 0);
    function onClick() {
        forceUpdate();
    }
}