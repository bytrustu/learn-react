import React, {useState, createContext, memo} from 'react';
import Ref from "./Ref";

const UserContext = createContext({username: '', helloCount: 0});
const SetUerContext = createContext(() => {
})

const Context = memo(() => {
    const [user, setUser] = useState({username: 'bytrustu', helloCount: 0});
    return (
        <div>
            <Ref/>
            <br/>
            <br/>
            <br/>
            <br/>
            <SetUerContext.Provider value={setUser}>
                <UserContext.Provider value={user}>
                    <div>상단메뉴</div>
                    <Profile/>
                    <div>하단메뉴</div>
                </UserContext.Provider>
            </SetUerContext.Provider>
        </div>
    )
})

const Profile = memo(() => {
    return (
        <div>
            <p>프로필</p>
            <Greeting/>
        </div>
    )
})

const Greeting = memo(() => {
    return (
        <SetUerContext.Consumer>
            {setUser => (
                <UserContext.Consumer>
                    {({username, helloCount}) => (
                        <>
                            {Array(helloCount).fill().map(v => <p>{`${username}님 안녕하세요.`}</p>)}
                            <p>{`인사 횟수: ${helloCount}`}</p>
                            <button type="button" onClick={() => {setUser({username, helloCount: helloCount + 1})}}>인사하기</button>
                        </>
                    )}
                </UserContext.Consumer>
            )}


        </SetUerContext.Consumer>
    )
})

export default Context;