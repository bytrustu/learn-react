import React from 'react';
import logo from './logo.svg';
import './App.css';
import DependencyEffect from "./UseEffect";
import AsyncAwaitComponent from "./AsyncAwait";
import PrevState from "./PrevState";
import UseEffectTimer, {UseReducerTimer} from "./UseReducer";
import {RefExample1, RefExample2} from "./UseRef";
import ReactMemo from "./ReactMemo";
import SelectFruit from "./SelectFruit";
import Counter1 from "./Counter1";


function App() {
    return (
        <>
            <Counter1/>
        </>
    )
}

export default App;
