import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
      super(props);

      this.setState = {
          name: !this.props.name ? '' : this.props.name,
          price: !this.props.price ? '' : this.props.price
      };
  }

  handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }

  handleSubmit = () => {
      const { name, price } = this.state;
      if ( this.props.name && this.props.price ) {
          this.props.updateItem({ name, price });
      } else {
          this.props.addItem({ name, price});
      }
  }

  handleCancel = () => this.props.closeForm();

  render() {
    return (
      <form className="menu-row" >
        <div className="menu-item-name">
          <input value={this.state.name} onChange={this.handleChange}
            name="name" placeholder="Enter item name" type="text" />
        </div>
        <div className="menu-item-price">
          <input value={this.state.price} onChange={this.handleChange}
            name="price" placeholder="item price" type="text" />
        </div>
        <div className="operations">
          <span onClick={this.handleSubmit} className="btn done" >
            <i className="fas fa-check" />
          </span>
          <span onClick={this.handleCancel} className="btn cancel">
            <i className="fas fa-times" />
          </span>
        </div>
      </form>
    )
  }
}