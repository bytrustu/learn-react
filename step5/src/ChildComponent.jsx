import React from 'react';

class ChildComponent extends React.Component {

    componentDidMount() {
        const { name } = this.props;
        // sendMountEvent(name);
    }

    render() {
        const { children } = this.props;
        return children()
    }
}

function ParentComponent() {
    return (
        <ChildComponent name="ChildComponent">
            {() => <div><p>1</p><p>2</p></div>}
        </ChildComponent>
    )
}

export default ParentComponent;