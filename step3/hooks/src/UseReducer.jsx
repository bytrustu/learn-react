import React, { useReducer } from 'react';
import ProfileDispatch from "./ProfileDispatch";

const INITIAL_STATE = { name: 'empty', age: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'setName':
            return { ...state, name: action.name };
        case 'setAge':
            return { ...state, age: action.age };
        default:
            return state;
    }
}

function ReducerProfile() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const {age, name} = state;
    return (
        <div>
            <p>{`name is ${name}`}</p>
            <p>{`age is ${age}`}</p>
            <ProfileDispatch value={dispatch} name={name} age={age} />
        </div>
    )
}

export default ReducerProfile;