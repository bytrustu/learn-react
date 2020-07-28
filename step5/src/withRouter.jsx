import hoistNonReactStatics from "hoist-non-react-statics/src";
import React from 'react';

const withRouter = Component => {
    const C = props => {
        const { wrappedComponentRef, ...remainingProps } = props;
        return (
            <Route
                render={routeComponentProps => (
                    <Component
                        {...remainingProps}
                        {...routeComponentProps}
                        ref={wrappedComponentRef}
                    />
                )}
                />
        )
    }

    C.displayName = `withRouter(${Component.displayName || Component.name})`;
    C.WrappedComponent = Component;
    C.propTypes = {
        wrappedComponentRef: PropTypes.func,
    };
    return hoistNonReactStatics(C, Component);
}

export default withRouter;