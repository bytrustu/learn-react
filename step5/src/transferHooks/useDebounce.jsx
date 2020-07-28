import React, {useState, useEffect} from 'react';

function useDebounce({callback, ms, deps}) {
    useEffect(() => {
        const id = setTimeout(callback, ms);
        return () => clearTimeout(id);
    }, deps);
}

function DebounceProfile() {
    const [name, setName] = useState('');
    const [nameTemp, setNameTemp] = useState('');
    useDebounce({
        callback: () => setName(nameTemp),
        ms: 1000,
        deps: [nameTemp]
    });
    return (
        <div>
            <p>{name}</p>
            <input
                type="text"
                onChange={e => setNameTemp(e.currentTarget.value)}
                value={nameTemp}
            />
        </div>
    )
}

export default DebounceProfile;