import React from 'react';

const UserContext = React.createContext('unknown');
const ThemeContext = React.createContext('black');

class ContextTypeComponent extends React.Component {

    componentDidMount() {
        const { username, theme } = this.props;
        console.log(username, theme);
    }

    render() {
        const { username, theme } = this.props;
        return (
            <div style={{ backgroundColor : theme }}>
                <span>{username} : {theme}</span>
            </div>
        )
    }
}

ContextTypeComponent.contextType = ThemeContext;

export default props => (
    <UserContext.Consumer>
        {username => (
            <ThemeContext.Consumer>
                {theme => <ContextTypeComponent {...props} username={username} theme={theme} />}
            </ThemeContext.Consumer>
        )}
    </UserContext.Consumer>
)