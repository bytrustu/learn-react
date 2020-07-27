import React from 'react';
import memoize from 'lodash/memoize';

class MemoComponent extends React.Component {
    getFilterProducts = memoize(function(products) {
        return products.filter(product => product.price < 1000);
    })
    render() {
        const { products } = this.props;
        const filteredProducts = this.getFilterProducts(products);
        return <div>{filteredProducts.map(item => <p>{item.price} {item.name}</p>)}</div>;
    }
}

export default MemoComponent;