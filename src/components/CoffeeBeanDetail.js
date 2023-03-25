import React, { Component } from "react";
import PropTypes from "prop-types";
import beanImage from "../assets/img/coffee-bean.png";

class CoffeeBeanDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeLeft: 130
    };
  }

  sellCoffeeBean = () => {
    this.setState(prevState => ({ coffeeLeft: prevState.coffeeLeft - 1 }));
  }

  render() {
    const { bean, onClickingDelete } = this.props;

    return (
      <div className="product-details">
        <div className="second-bean-image-container">
          <img src={beanImage} className="second-bean-image" />
        </div>
        <h1>{bean.name} Detail</h1>
        <h3>Price per pound: ${bean.price}/lb</h3>
        <h3>Origin: {bean.origin}</h3>
        <h3>Roast: {bean.roast}</h3>
        <h3>Coffee Bean available for purchase: {this.state.coffeeLeft === 0 ? "Out of Stock" : `${this.state.coffeeLeft}lbs`}</h3>
        <hr />
        <div className="details-page-buttons">
          <button disabled={this.state.coffeeLeft === 0} onClick={this.sellCoffeeBean}>Sell 1lb</button>
          <button onClick={this.props.onClickingEdit}>Update Detail</button>
          <button onClick={() => onClickingDelete(bean.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

CoffeeBeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeBeanDetail;
