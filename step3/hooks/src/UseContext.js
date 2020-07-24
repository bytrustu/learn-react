import React, {useState, createContext, useContext} from 'react'

const UserContext = createContext();
const user = {name: 'mike', age: 23};

function ParentComponent() {
    return (
        <UserContext.Provider value={user}>
            <ChildComponent/>
        </UserContext.Provider>
    )
}

function ChildComponent() {
    const user = useContext(UserContext);
    return (
        <div>
            <>
                <p>{`name is ${user.name}`}</p>
                <p>{`age is ${user.age}`}</p>
            </>
        </div>
    )
}

export default ParentComponent;