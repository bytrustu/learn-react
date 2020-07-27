import React, {useState} from 'react';
import Select from "./Select";

function SelectFruit ({ selectedFruit }) {

    const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
    const [newFruit, setNewFruit] = useState("");

    function addNewFruit() {
        setFruits([ ...fruits, newFruit ]);
        setNewFruit("");
    }

    return (
        <div>
            <Select options={fruits} selected={selectedFruit} />
            <input
                type="text"
                value={newFruit}
                onChange={e => setNewFruit(e.target.value)}
            />
            <button onClick={addNewFruit}>추가하기</button>

        </div>
    )

}

export default SelectFruit;