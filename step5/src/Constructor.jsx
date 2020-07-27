import React from 'react';

class Constructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMovie: props.age < 10 ? '뽀로로' : '어벤져스',
        };
    }
}

export default Constructor;