import React, {useState} from 'react';

function Select({ options, selected }) {

    return (
        <>
            <select>
                {options.map(item => <option value={item} selected={selected === item && "selected"}>{item}</option>)}
            </select>
        </>
    )
}

export default Select;