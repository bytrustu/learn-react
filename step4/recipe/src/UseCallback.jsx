import React, {useState, useCallback} from 'react';

function UseCallback() {

    const [selectFruit, setSelectFruit] = useState("apple");

    const onChangeFruit = useCallback(fruit => {
        setSelectFruit(fruit);
        sendLog({type: "fruit change", value: fruit});
    }, []);
    return (
        <div>
            <SelectFruit
                selected={selectFruit}
                onChange={onChangeFruit}
            />
        </div>
    )
}

export default UseCallback;