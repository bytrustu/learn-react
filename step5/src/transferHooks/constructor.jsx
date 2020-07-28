import React, { useState, useRef } from 'react';

function Profile({ firstName, lastName }) {
    const [name, setName] = useState(`${firstName} ${lastName}`);
    const isFirstRef = useRef(true);
    if (isFirstRef.current) {
        isFirstRef.current = false;
        callApi();
    }
}