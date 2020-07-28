import React from 'react';
import withDiv from "./withDiv";
import withDebug from "./withDebug";

class TestDivComponent extends React.Component {
    render() {
        return (
            <p>
                aaaa
            </p>
        )
    }
}

export default withDebug(withDiv(TestDivComponent))