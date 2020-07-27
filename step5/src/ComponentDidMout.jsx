import React from 'react';

class Box extends React.Component {
    state = {
        boxWidth: 0
    }
    divRef = React.createRef();
    componentDidMount() {
        const rect = this.divRef.current.getBoundingClientRect()
        this.setState({boxWidth: rect.width});
    }

    render() {

        const {boxWidth} = this.state;
        console.log(boxWidth)
        const backgroundColor = boxWidth < 400 ? 'red' : 'blue';
        return (
            <div
                ref={this.divRef}
                style={{width: '100%', height: '100px', backgroundColor}}
            >
                BOX
            </div>
        )
    }
}

export class PromiseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.dataPromise = requestData();
    }
    componentDidMount() {
        this.dataPromise.then(data => this.setState({ data }));
    }

    render() {
        const data = this.state?.data;
        return data ? (
            <div>
                <div>{data.name} : {data.amount}</div>
            </div>
        ) : null;
    }
}

function requestData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: 'bytrustu', amount: 10})
        },2000)
    })
}

export default Box;