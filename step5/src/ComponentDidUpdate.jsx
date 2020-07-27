import React from 'react';

class DidUpdateComponent extends React.Component {

    state = {
        text: ''
    }

    divRef = React.createRef();

    componentDidUpdate() {
        const div = this.divRef.current;
        const rect = div.getBoundingClientRect();
        if (div.scrollWidth > rect.width) {
            alert('스크롤이 가능합니다.');
        }
    }

    onChange = event => {
        const text = event.target.value;
        this.setState({text});
    }

    render() {
        const {text} = this.state;
        return (
            <>
                <input onChange={this.onChange} value={text} />
                <div
                    ref={this.divRef}
                    style={{ width: 100, height: 100, overflow: 'scroll' }}
                >
                    {text}
                </div>
            </>
        )
    }
}


class UserInfo extends React.Component {
    componentDidMount() {
        const { user } = this.props;
        this.setFriends(user);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const { user } = this.props;
        if (prevProps.user.id !== user.id) {
            this.setFriends(user);
        }
    }
    setFriends(user) {
        requiestFriends(user).then(friends => this.setState({ friends }))
    }
}

export default DidUpdateComponent;