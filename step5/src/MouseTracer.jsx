import React from 'react';

class MouseTracer extends React.Component {
    state = {
        x: null,
        y: null,
    }
    onMouseMove = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    render() {
        const { children } = this.props;
        const { x, y } = this.state;
        return (
            <div onMouseMove={this.onMouseMove} style={{ 'height': '500px', 'width': '500px'}}>
                {children({ x, y })}
            </div>
        )
    }
}

export default function MouseComponent() {
    return (
        <MouseTracer>
            {({ x, y }) => <p>{`(x, y): (${x} : ${y})`}</p>}
        </MouseTracer>
    )
}