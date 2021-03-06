import React, {Component, Fragment} from 'react';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
  state = {
    order: 4
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="" alt=""/>
          </div>
          <div className="troley">
            <img src="" alt=""/>
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(v) => this.handleCounterChange(v)} />
      </Fragment>
    )
  }
}

export default Product;