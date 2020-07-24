import React, { useContext, useState } from 'react';

function ProfileDispatch({ value, age, name }) {
    return (
        <>
            <input
                type="text"
                value={name}
                onChange={e =>
                    value({ type: 'setName', name: e.currentTarget.value })
                }

            />
            1
            <input
                type="text"
                value={age}
                onChange={e => value({ type: 'setAge', age: e.currentTarget.value })}
            />
        </>
    )
}

export default ProfileDispatch;