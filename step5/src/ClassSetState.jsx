import React from 'react';

const actions = {
    init() {
        return { count: 0 };
    },
    increment(state) {
        return { count: state.count + 1 };
    },
    decrement(state) {
        return { count: state.count - 1 };
    },
};

class StateComponent extends React.Component {
    state = actions.init();
    onIncrement = () => {
        this.setState(actions.increment);
    }
    onDecrement = () => {
        this.setState(actions.decrement);
    }
    onClick = () => {
        this.setState({ count: 123 }, () => console.log('count is 123'));
    }
    onClick2 = () => {
        this.state.comment = 'Hello';
        this.forceUpdate();
    }
}