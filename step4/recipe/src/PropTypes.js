import * as PropTypes from "prop-types";


User.propsTypes = {
    male: PropTypes.bool.isRequired,
    age: PropTypes.number,
    type: PropTypes.oneOf(["gold", "silver", "bronze"]),
    onChangeName: PropTypes.func,
    onChangeTitle: PropTypes.func.isRequired
}

MyComponent.propTypes = {
    menu: PropTypes.element,
    description: PropTypes.node,
    message: PropTypes.instanceOf(Message),
    name: PropTypes.oneOf(["jone", "mike"]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ages: PropTypes.arrayOf(PropTypes.number),
    info: PropTypes.shape({
        color: PropTypes.string,
        weight: PropTypes.number
    }),
    infos: PropTypes.objectOf(PropTypes.number),
    age: function(props, propName, componentName) {
        const value = props[propName];
        if (value < 10 || value > 20) {
            return new Error(
                `Invalid prop ${propName} supplied to ${componentName}.
                 It must be 10 <= value <= 20.`
            );
        }
    }
}

function MyComponent() {

}

function User() {

}