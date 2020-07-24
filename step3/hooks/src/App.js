import React from 'react';
import './App.css';
import Profile from "./Profile";
import OnResize from "./OnResize";
import Context from "./Context";
import ParentComponent from "./UseContext";
import RefProfile from "./UseRef";
import ReducerProfile from "./UseReducer";
import ImpParentComponent from "./ImperativeHandle";

function App() {
    return (
        <>
            <ImpParentComponent/>
        </>
    );
}

export default App;
