import React from 'react';

class ErrorBoundary extends React.Component {

    state = { error: null };
    static getDerivedStateFromError(error) {
        console.log('@@@@',error)
        return { error };
    }

    componentDidCatch(error, info) {
        // sendErrorToServer(error, info);
    }

    render() {
        const { error } = this.state;
        console.log(`>>>>> ${error}`)
        if (error) {
            return <div>{error.toString()}</div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;