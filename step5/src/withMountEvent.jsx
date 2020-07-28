import React from 'react';
const { Component } = React;

function withMountEvent(InputComponent, componentName) {
    return class OutputComponent extends Component {
        componentDidMount() {
            sendMountEvent(componentName);
        }
        render() {
            return <InputComponent {this.props} />
        }
    }
}

export default withMountEvent;