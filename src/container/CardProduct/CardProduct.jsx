import React, {Component} from 'react';

class CardProduct extends Component {
  state = {
    order: 4
  }

  handleCounterChange = (v) => {
    this.props.onCounterChange(v);
  }

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1
    }, () => {
      this.handleCounterChange(this.state.order)
    })
  }

  handleMinus = () => {
    this.setState({
      order: this.state.order - 1
    }, () => {
      this.handleCounterChange(this.state.order)
    })
  }

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="https://av-uploads.s3.amazonaws.com/merchant_oot_icon/img-20200512051642.jpg" alt=""/>
        </div>
        <p className="product-title">Daging Ayam</p>
        <p className="product-price">Rp 34.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>-</button>
          <input type="text" value={this.state.order}/>
          <button className="plus" onClick={this.handlePlus}>+</button>
        </div>
      </div>
    )
  }
}

export default CardProduct;