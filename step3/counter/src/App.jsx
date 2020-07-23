import React, { useState, memo } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function onIncrease() {
    setCount(count + 1);
  }

  function onDecrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <Title title={`현재 카운트는 ${count} 입니다.`}/>
      <button type="button" onClick={onIncrease}>증가</button>
      <button type="button" onClick={onDecrease}>감소</button>
    </div>
  );
}

const Title = memo(({title}) => {
    return <p>{title}</p>
})

export default App;
