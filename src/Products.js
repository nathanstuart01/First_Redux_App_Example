import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from './actions/products';
import { Link } from 'react-router';

class Products extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProducts());
  }


render() {
  let products = this.props.products.map( product => {
    return (
      <li key={product.id}>
      <Link to={`/products/${product.id}`}>{product.name}</Link>
      </li>
    )
  });
  return (
    <div>
    <ul>
      { Products }
    </ul>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return { products: state.products }
}

export defualt connect(mapStateToProps)(Products);
