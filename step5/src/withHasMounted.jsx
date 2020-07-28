import React from 'react';

function withHasMounted(InputComponent) {
    return class OutputComponent extends React.Component {
        state = {
            hasMounted: false,
        }
        componentDidMount() {
            this.setState({ hasMounted: true });
        }
        render() {
            const { hasMounted } = this.state;
            return <InputComponent {...this.props} hasMounted={hasMounted} />
        }
    }
}

export default withHasMounted;