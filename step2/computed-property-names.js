import React, { Component } from 'react';

class MyComponent extends Component {
    state = {
        count1: 0,
        count2: 0,
        count3: 0,
    }

    onClick = index => {
        const key = `count${index}`;
        const value = this.state[key];
        this.setState({
            [key]: value + 1
        });
    }
}
