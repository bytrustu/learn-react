/* @jsx createElement */
import { Component, createElement, render } from './react.js';

class YourTitle extends Component {
  render() {
    return createElement("p", null, "\uD074\uB798\uC2A4 \uD0C0\uC774\uD2C0");
  }

}

function Title(props) {
  return createElement("div", null, createElement("h2", null, "\uD655\uC778"), createElement(YourTitle, null), createElement("p", null, "\uB3D9\uC791 \uD14C\uC2A4\uD2B8"));
}

render(createElement(Title, null), document.querySelector('#root'));