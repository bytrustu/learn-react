import React, {useState, useRef, useEffect} from 'react';

function usePrevious(value) {
    const valueRef = useRef();
    useEffect(() => {
        valueRef.current = value;
    }, [value]);
    return valueRef.current;
}

function Profile(props) {
    const [name, setName] = useState(props.name);
    const prevUserId = usePrevious(props.userId);
    const isMountedRef = useRef(false);
    useEffect(() => {
        if (isMountedRef.current) {
            if (prevUserId !== props.userId) {
                setName(props.name);
            }
        } else {
            isMountedRef.current = true;
        }
    })
}

function useOnUpdate(func) {
    const isMountedRef = useRef(false);
    useEffect(() => {
       if (isMountedRef.current) {
           func();
       } else {
           isMountedRef.current = true
       }
    });
}