import React, {useState} from 'react';

function SpeedIndicator({ speed }) {
    const [isFaster, setIsFaster] = useState(false);
    const [prevSpeed, setPrevSpeed] = useState(0);
    if (speed !== prevSpeed) {
        setIsFaster(speed > prevSpeed);
        setPrevSpeed(speed)
    }
    return <p>It's getting faster: {isFaster ? 'yes' : 'no'}</p>;
}