import React from 'react';

class SnapshotComponent extends React.Component {
    state = {
        items: ["1","2"]
    }
    divRef = React.createRef();

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const {items} = this.state;
        if (prevState.items.length < items.length) {
            const rect = this.divRef.current.getBoundingClientRect();
            return rect.height;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            const rect = this.divRef.current.getBoundingClientRect();
            console.log(rect.height, snapshot)
            if (rect.height !== snapshot) {
                alert('새로운 줄이 추가 되었습니다.');
            }
        }
    }

    onClick = () => {
        const {items} = this.state;
        this.setState({items: [...items, '아이템']});
    }

    render() {
        const {items} = this.state;
        return (
            <>
                <button onClick={this.onClick}>추가하기</button>
                <div ref={this.divRef} style={{ width: '100%' }}>
                    {items.map(item => <p style={{height: 50}}>{item}</p>)}
                </div>
            </>
        )
    }
}

export default SnapshotComponent;