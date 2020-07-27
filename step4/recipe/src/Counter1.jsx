import React, {useState, useEffect} from 'react';

function Counter1() {
    const [flag, setFlag] = useState(true);
    const fruits = flag ? FRUITS_1 : FRUITS_2;
    useEffect(() => {
        setTimeout(() => {
            setFlag(prev => !prev);
        }, 1000);
    })
    return (
        <div>
            {fruits.map((item, index) => (
                <p key={item}>{item}</p>
            ))}
        </div>
    )
}

const FRUITS_1 = ["apple", "banana", "pineapple"];
const FRUITS_2 = ["apple", "pineapple"];

export default Counter1;