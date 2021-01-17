/* @jsx createElement */
import { Component, createElement, render } from './react.js';

class YourTitle extends Component {
  render() {
    return (
      <p>클래스 타이틀</p>
    )
  }
}

function Title(props) {
  return (
    <div>
      <h2>확인</h2>
      <YourTitle/>
      <p>동작 테스트</p>
    </div>
  );
}

render(<Title />, document.querySelector('#root'));
