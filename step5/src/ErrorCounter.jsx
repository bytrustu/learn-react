import React from 'react';

class ErrorCounter extends React.Component {
    state = { count: 0 };
    onClick = () => {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    }
    render(){
        const { count } = this.state;
        if (count >= 3) {
            throw new Error('에러 발생!');
        }
        return <div onClick={this.onClick}>{`클릭하세요 ${count}`}</div>
    }
}

export default ErrorCounter;