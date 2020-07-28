import React from 'react';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onClickInc = this.onClickInc.bind(this);
        this.onClickDec = this.onClickDec.bind(this);
    }

    state = {
        count: 0
    }

    onClickHello(e) {
        e.preventDefault();
        alert('hello world');
    }

    onClickDec(e) {
        const { count } = this.state;
        this.setState({ count: count - 1 });
    }

    onClickInc(e) {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <p>{count}</p>
                <button onClick={this.onClickHello} />
                <button onClick={this.onClickDec} />
                <button onClick={this.onClickInc} />
            </div>
        )
    }
}


export default CounterComponent;