import React from 'react';
import './App.css';
import Profile from "./Profile";
import OnResize from "./OnResize";
import Context from "./Context";

function App() {
    return (
        <>
            <Context/>
            <OnResize/>
            <Profile userId={'bytrustu'}/>
        </>
    );
}

export default App;
