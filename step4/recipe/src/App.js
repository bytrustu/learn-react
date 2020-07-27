import React from 'react';
import logo from './logo.svg';
import './App.css';
import DependencyEffect from "./UseEffect";
import AsyncAwaitComponent from "./AsyncAwait";
import PrevState from "./PrevState";
import UseEffectTimer, {UseReducerTimer} from "./UseReducer";
import {RefExample1, RefExample2} from "./UseRef";

function App() {
    const onClick = () => {console.log('on click')};
    return (
        <>
            <RefExample2 onClick={onClick}/>
        </>
    );
}

export default App;
