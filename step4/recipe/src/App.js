import React from 'react';
import logo from './logo.svg';
import './App.css';
import DependencyEffect from "./UseEffect";
import AsyncAwaitComponent from "./AsyncAwait";
import PrevState from "./PrevState";
import UseEffectTimer, {UseReducerTimer} from "./UseReducer";

function App() {
    return (
        <>
            <UseReducerTimer initialTotalSeconds={10000}/>
            <UseEffectTimer initialTotalSeconds={10000}/>
        </>
    );
}

export default App;
