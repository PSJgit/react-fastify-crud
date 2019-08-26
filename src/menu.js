
import React, { Component } from 'react';
import MenuItem from './components/menuItem';
import Form from './components/form';
import './menu.css';
import { connect } from 'react-redux';
import { createItem, deleteItem, updateItem } from './redux/actions/actions'
import uuid from 'uuid';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { openAddForm: false }
  }

  handleAddClick = () => this.setState({ openAddForm: true });

  handleAddItem = ({ name, price} ) => {
    if ( name == '') {
      name = 'untitled';
    }
    if ( price == '' ) {
      price = 999;
    }

    const newItem = {
      id: uuid.v4(),
      name, 
      price
    }

    this.props.createItem(newItem);
    this.handleCancel();
  }

  handleDeleteItem = (id) => this.props.deleteItem(id);

  handleUpdateItem = (item) => this.props.updateItem(item);

  handleCancel = () => this.setState({ openAddForm: false});

  render() {
    return (
      <>
        <h1><i class="fas fa-list-alt"></i> e-Menu</h1>

        <div className="menu" >

          <div className="heading menu-row">
            <div className="menu-item-name">Name</div>
            <div className="menu-item-price">Price</div>
            <div className="operations"> Operations</div>
          </div>

          {this.props.menuItems.length > 0 ? this.props.menuItems.map((item, i) => {
            return <MenuItem key={item.name + "-" + item.price + "-" + item.id} id={item.id}
              name={item.name} 
              price={item.price}
              handleDelete={this.handleDeleteItem}
              handleUpdate={this.handleUpdateItem}
              closeForm={this.handleCancel} />
          }) : (
              <div className="menu-row">
                <div className="msg">List is empty.</div>
              </div>
            )}

        </div>

        {!this.state.openAddForm ? (
          <span onClick={this.handleAddClick} className="add btn"><i className="fas fa-plus"></i></span>
        ) : (
            <div className="menu"><Form addItem={this.handleAddItem} closeForm={this.handleCancel} /></div>
          )}
      </>
    )
  }
}

const mapStateToProps = ({ menuItems }) => ({
  menuItems
})

export default connect(mapStateToProps, { createItem, deleteItem, updateItem })(Menu);
