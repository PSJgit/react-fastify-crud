import React, { Component } from 'react';
import Form from './form';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: null,
      openEditForm: false,
    }
  }

  componentDidMount() {
    const { name, price } = this.props;
    this.setState({ name, price});
  }

  handleEditClick = () => this.setState({ openEditForm: true });

  handleUpdate = ({name, price}) => {
    const updatedItem = {
      id: this.props.id,
      name,
      price
    }
  }

  handleDelete = () => this.props.handleDelete(this.props.id);

  handleCancel = () => this.setState({openEditForm : false});
  
  render() {
    return (
      <>
        {
          !this.state.openEditForm ? (
            <div className="menu-row">
              <div className="menu-item-name">{this.state.name}</div>
              <div className="menu-item-price">{this.state.price}</div>
              <div className="operations">
                <span onClick={this.handleEditClick} className="btn edit" ><i className="fas fa-pen"></i></span>
                <span onClick={this.handleDelete} className="btn delete"><i className="fas fa-trash"></i></span>
              </div>
            </div>
          ) : (
            <Form name={this.state.name} price={this.state.price} 
            closeForm={this.handleCancel} updateItem={this.handleUpdate} />
          )
        }
      </>
    )
  }
}