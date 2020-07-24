import React, { useRef } from 'react';
import ChildProfile from "./ChildProfile";

function ImpParentComponent() {
    const profileRef = useRef();
    const onClick = () => {
        console.log(profileRef.current)
        if (profileRef.current) {
            console.log(`current name length: ${profileRef.current.addAge(5)}`)
        }
    }
    return (
        <div>
            <ChildProfile ref={profileRef} />
            <button onClick={onClick}>add age 5</button>
        </div>
    )
}

export default ImpParentComponent;