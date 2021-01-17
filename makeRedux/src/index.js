/* @jsx createElement */
import { Component, createElement, render } from './react.js';
import { createStore } from './redux.js';

const COUNTER = 'count';
const FETCH = 'fetch';

// function middleware(dispatch, action) {
//   if (action.type === '비동기작업') {
//     fetch().then(() => {
//       dispatch('응답');
//     })
//   }
// }

const middleware1 = (store) => (dispatch) => (action) => {
  if (action.type === 'fetch') {
    console.log('fetch log');
    setTimeout(() => {
      dispatch({
        type: 'fetch-response',
        payload: [
          1, 2, 3,
        ],
      });
    }, [2000]);
  } else {
    dispatch(action);
  }
  console.log('mid1');
  dispatch(action);
};

// const middleware2 = (store) => (dispatch) => (action) => {
//   console.log('mid2');
//   dispatch(action)
// }


function reducer(state, action) {
  if (action.type === COUNTER) {
    return {
      ...state,
      counter: action.payload.counter,
    };
  }

  if (action.type === 'fetch-response') {
    return { ...state, response: action.payload };
  }

  // if (action.type === FETCH) {
  //   fetch('').then(response => {
  //     console.log(response);
  //   })
  // }
  return state;
}

function listener() {
  console.log(store.getState());
}

function actionCreator(type, payload) {
  return {
    type,
    payload,
  };
}

// const store = createStore(reducer, [middleware1, middleware2]);
const store = createStore(reducer, [middleware1]);

store.subscribe(listener);

function counter(data) {
  store.dispatch(actionCreator(COUNTER, data));
}

counter({ counter: 1 });
counter({ counter: 2 });

store.dispatch(actionCreator('fetch'));

// store.dispatch(actionCreator(COUNTER, { counter: 1 } ))
// store.dispatch(actionCreator(COUNTER, { counter: 2 } ))

// store.dispatch({
//   type: 'count',
//   payload: {
//     counter: 1,
//   },
// });


class YourTitle extends Component {
  render() {
    return (
      <p>클래스 타이틀</p>
    );
  }
}

function Title(props) {
  return (
    <div>
      <h2>확인</h2>
      <YourTitle />
      <p>동작 테스트</p>
    </div>
  );
}

render(<Title />, document.querySelector('#root'));
