Promise.race([
    requestData(),
    new Promise((_, reject) => setTimeout(reject, 3000))
])
    .then(data => console.log(data))
    .catch(error => console.log(error));

// requestData 함수가 3초 안에 데이터를 받으면 then 메서드가 호출되고, 그렇지 않으면 catch 메서드가 호출된다.