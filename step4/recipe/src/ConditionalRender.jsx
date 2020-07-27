function GreetingA({isLogin, name}) {
    if (isLogin) {
        return <p className="greeting" onClick={showMenu}>{`${name} 님 안녕하세요.`}</p>
    } else {
        return <p className="noAuth" onClick={goToLoginPanel}>권한이 없습니다.</p>
    }
}

function GreetingB({isLogin, name}) {
    return <p
        className={isLogin ? 'greeting' : 'noAuth'}
        onClick={isLogin ? showMenu : goToLoginPage}
    >
        {isLogin ? `${name}님 안녕하세요.` : `권한이 없습니다.`}
    </p>
}

function GreetingC({isLogin, isEvent, name, cash}) {
    return (
        <div>
            저희 사이트에 방문해 주셔서 감사하빈다.
            {isEvent && (
                <div>
                    <p>오늘의 이벤트를 놓치지 마세요.</p>
                    <button onClick={onClickEvent}>이벤트 참여하기</button>
                </div>
            )}
            {!isEvent && (
                isLogin && (
                    cash <= 1000000 && (
                        <div>
                            <p>{name}님 안녕하세요.</p>
                            <p>현재 보유하신 금액은 {cash != null && `${cash}원 입니다.`}</p>
                        </div>
                    )
                )
            )}

        </div>
    )
}

function setDefaultArray(arr) {
    return (
        <>
            <div>{arr && arr.map(/* */)}</div>
            <div>{arr.map(/* */)}</div>
        </>
    )
}