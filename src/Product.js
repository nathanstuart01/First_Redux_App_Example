import React from 'react';
import { connect } from 'react-redux';

class Product extends React.Component {
  state = { edit: false }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  show = () => {
    return (
      <h1>{this.props.product.name}</h1>
    )

  }

  edit = () => {

  }

  render() {
    return this.state.edit ? this.edit() : this.show ();
  }
}

const mapStateToProps = (state, props) => {
  return { product: state.products.find( p => p.id == props.params.id ) }
}

export default connect(mapStateToProps)(Product);
