import getDisplayName from 'recompose/getDisplayName';
import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react';
const { Component } = React;

function withSomething(InputComponent) {
    class OutputComponent extends Component {

    }
    OutputComponent.displayName = `withSomething(${getDisplayName(InputComponent)})`
    hoistNonReactStatics(OutputComponent, InputComponent)
    return OutputComponent;
}

export default withSomething;