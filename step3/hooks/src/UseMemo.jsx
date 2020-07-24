import React, { useMemo } from 'react';
import { runexpensiveJob } from './util';

function MemoComponent({ v1, v2 }) {
    const value = useMemo(() => runexpensiveJob(v1, v2), [v1, v2]);
    return <p>{`value is ${value}`}</p>
}

export default MemoComponent;