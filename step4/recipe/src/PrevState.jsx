import React, {useEffect, useState} from 'react';

function PrevState() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        function onClick(){
            setCount(prev => prev + 1);
        }
        window.addEventListener("click", onClick);
        return () => window.removeEventListener("click", onClick);
    });
    return (
        <div>
            <p>클릭횟수 {count}</p>
        </div>

    )
}

export default PrevState;