import React, {useEffect, useState, useCallback} from 'react';

function fetchUser(userId, needDetail) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({userId: userId, name: 'yjoon', cash: needDetail, createdAt: new Date()})
        },1000)
    });
}

function AsyncAwaitComponent() {
    const id = 'bytrustu';
    const [user, setUser] = useState();
    const fetchAndSetUser = useCallback(async needDetail => {
        const data = await fetchUser(id, needDetail);
        setUser(data);
    }, [id])
    useEffect(() => {
        fetchAndSetUser(false);
    }, [fetchAndSetUser])
    console.log(user)
    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <p>{`캐시 :  ${user.cash}`}</p>
                    <p>{`계정 생성일 : ${user.createdAt}`}</p>
                    <button onClick={() => fetchAndSetUser(true)}>더보기</button>
                </div>
            ) :
            <h1>로딩중...</h1>}
        </div>

    )
}

export default AsyncAwaitComponent;