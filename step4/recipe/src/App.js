import React from 'react';
import logo from './logo.svg';
import './App.css';
import DependencyEffect from "./UseEffect";
import AsyncAwaitComponent from "./AsyncAwait";
import PrevState from "./PrevState";
import UseEffectTimer, {UseReducerTimer} from "./UseReducer";
import {RefExample1, RefExample2} from "./UseRef";
import ReactMemo from "./ReactMemo";

function App() {

    const prevProps = {
        todos: [{ title: 'fix bug', priority: 'high'}, { title: 'meeting', priority: 'low'}]
    }

    const nextProps = {
        todos: [{ title: 'fix bug', priority: 'high'}, { title: 'meeting', priority: 'high'}]
    }

    return (
        <>
            <ReactMemo prevProps={prevProps} nextProps={nextProps}/>
        </>
    )
}

export default App;
