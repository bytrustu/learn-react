function* minsu() {
    const myMsgList = [
        '안녕 나는 민수야',
        '만나서 반가워',
        '내일 영화 볼래?',
        '시간 안 되니?',
        '내일모레는 어때?',
    ];
    for (const msg of myMsgList) {
        console.log('수지: ', yield msg)
    }
}

function suji() {
    const myMsgList = ['', '안녕 나는 수지야', '그래 반가워', '...'];
    const gen = minsu();
    for (const msg of myMsgList) {
        console.log('민수: ', gen.next(msg).value);
    }
}

suji();


// 민수:  안녕 나는 민수야
// 수지:  안녕 나는 수지야
// 민수:  만나서 반가워
// 수지:  그래 반가워
// 민수:  내일 영화 볼래?
// 수지:  ...
// 민수:  시간 안 되니?
