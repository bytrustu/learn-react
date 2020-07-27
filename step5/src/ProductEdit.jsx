import React from 'react';

class ProductEdit extends React.Component {
    state = {
        currentPrice: this.props.product.price,
    }
    onChangePrice = event => {
        const currentPrice = Number(event.target.value);
        if (!Number.isNaN(currentPrice)) {
            this.setState({ currentPrice });
        }
    }
    render() {
        const { currentPrice } = this.state;
        return <PriceInput onChange={this.onChangePrice} value={currentPrice} />
    }
}

class PriceInput extends React.Component {
    render() {
        const { onChange, value } = this.props;
        console.log(onChange, value)
        return <input onChange={onChange} value={value} />;
    }
}

export default ProductEdit;