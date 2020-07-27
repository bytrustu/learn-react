import React, { useState, useEffect, useReducer } from 'react';

function UseEffectTimer ({ initialTotalSeconds }) {

    const [hour, setHour] = useState(Math.floor(initialTotalSeconds / 3600));
    const [minute, setMinute] = useState(Math.floor((initialTotalSeconds / 3600) / 60));
    const [second, setSecond] = useState(Math.floor(initialTotalSeconds % 60));

    useEffect(() => {
        const id = setInterval(() => {
            if (second) {
                setSecond(second - 1);
            } else if (minute) {
                setMinute(minute - 1);
                setSecond(59);
            } else if (hour) {
                setHour(hour - 1);
                setMinute(59);
                setSecond(59);
            }
        }, 1000);
        return () => clearInterval(id);
    })

    return (
        <div>
            <p>{hour}</p>
            <p>{minute}</p>
            <p>{second}</p>
        </div>
    )
}

export function UseReducerTimer({ initialTotalSeconds }) {
    const INITIAL_VALUES = {
        hour: Math.floor(initialTotalSeconds / 3600),
        minute: Math.floor((initialTotalSeconds / 3600) / 60),
        second: Math.floor(initialTotalSeconds % 60)
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_VALUES);
    const { hour, minute, second } = state;
    useEffect(() => {
        const id = setInterval(dispatch, 1000);
        return () => clearInterval(id);
    })
    return (
        <div>
            <p>{hour}</p>
            <p>{minute}</p>
            <p>{second}</p>
        </div>
    )
}

function reducer(state) {
    const { hour, minute, second } = state;
    if (second) {
        return { ...state, second: second - 1}
    } else if (minute) {
        return { ...state, minute: minute - 1, second : 59 }
    } else if (hour) {
        return { ...state, hour: hour - 1, minute: 59, second: 59 }
    } else {
        return state;
    }
}

export default UseEffectTimer;
