import React, { useState, useCallback } from 'react';
import { saveToServer } from './api';
import UserEdit from './UserEdit';

function CallbackProfile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const onSave = useCallback(() => saveToServer(name, age), [name, age]);
    return (
        <div>
            <p>{`name is ${name}`}</p>
            <p>{`age is ${age}`}</p>
            <UserEdit onSave={onSave} setName={setName} setAge={setAge} />
        </div>
    )
}

export default CallbackProfile;