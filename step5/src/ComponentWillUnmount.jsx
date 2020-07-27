import React from 'react';

class WillUnmountComponent extends React.Component {

    componentDidMount() {
        const domNode = document.getElementById('someNode');
        domNode.addEventListener('change', this.onChange);
        domNode.addEventListener('dragstart', this.onDrageStart);
    }

    componentWillUnmount() {
        const domNode = document.getElementById('someNode');
        domNode.removeEventListener('change', this.onChange);
        domNode.removeEventListener('dragstart', this.onDrageStart)
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}


export default WillUnmountComponent;