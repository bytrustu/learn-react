import React, { useState, useEffect, useRef } from 'react';

export function RefExample1 ({ onClick }) {
    useEffect(() => {
        window.addEventListener("click", () => { onClick(); })
    }, onClick);
    return (
        <div></div>
    )
}

export function RefExample2 ({ onClick }) {
    const onClickRef = useRef();
    useEffect(() => {
       onClickRef.current = onClick;
    });
    useEffect(() => {
        window.addEventListener("click", () => {
            onClickRef.current();
        })
    })
    return (
        <div></div>
    )
}

