import React from 'react';

function withDebug(InputComponent) {
    return class OutputComponent extends InputComponent {
        render() {
            return (
                <>
                    <p>props: {JSON.stringify(this.props)}</p>
                    <p>state: {JSON.stringify(this.state)}</p>
                    {super.render()}
                </>
            )
        }
    }
}

export default withDebug;