import React from 'react';

class OnClickComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeAge = this.onChangeAge.bind(this);
    }

    onChangeAge(e) {
        this.setState({ age: e.currentTarget.value });
    }



    state = {
        name: 'default'
    }

    render() {
        const { name } = this.state;
        const { age } = this.state;
        return (
            <div>
                <p>{name} : {age}</p>
                <input value={name} onChange={e => this.onChange(e)} />
                <input value={age} onChange={this.onChangeAge.bind(this)} />
            </div>
        )
    }
}

export default OnClickComponent;