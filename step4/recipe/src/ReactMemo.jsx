import React, { memo } from 'react';

function ReactMemo ({ prevProps, nextProps }) {

    return (
        <div>
            {prevProps.todos.map(v => <p>{v.title} : {v.priority}</p>)}
            {nextProps.todos.map(v => <p>{v.title} : {v.priority}</p>)}
        </div>
    )
}

function isEqual(prevProps, nextProps) {
    return prevProps === nextProps;
}

export default memo(ReactMemo, isEqual);