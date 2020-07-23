import React, { useEffect, useState } from 'react';

function OnResize() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);
    const mounted = useMounted();
    return <div>{`width is ${width} ${mounted}`}</div>
}

function useMounted() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setTimeout(() => {setMounted(true)},1000)

    }, []);
    return mounted;
}

export default OnResize;