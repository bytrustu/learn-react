import React, {useState, useEffect, useRef, memo, forwardRef, createContext} from 'react';

const SetTextContext = createContext();
const SetShowTextContext = createContext();

const Ref = () => {

    const inputRef = useRef();


    const INITIAL_TEXT = '초기값';
    const [text, setText] = useState(INITIAL_TEXT);
    const [showText, setShowText] = useState(true)

    useEffect(() => {
        inputRef.current.focus();
    }, [])


    return (
        <div>
            <SetTextContext.Provider value={setText}>
                <SetShowTextContext.Provider value={setShowText}>
                    <TextInput ref={inputRef} text={text} showText={showText}/>
                </SetShowTextContext.Provider>
            </SetTextContext.Provider>
            {showText && text}
        </div>
    )
}

const TextInput = forwardRef(({text, showText}, ref) => {
    const onClickBtn = () => {
        ref.current.focus()
    }
    return (
        <div>
            <SetTextContext.Consumer>
                {setText => (
                    <SetShowTextContext.Consumer>
                        {setShowText => (
                            <>
                                <input type="text" ref={ref} value={text} onChange={(e) => setText(e.target.value)}/>
                                <button type="button" onClick={onClickBtn}>저장</button>
                                <button type="button" onClick={() => {setShowText(!showText)}}>보이기/감추기</button>
                            </>
                        )}
                    </SetShowTextContext.Consumer>
                )}
            </SetTextContext.Consumer>
        </div>
    )
})

export default Ref;