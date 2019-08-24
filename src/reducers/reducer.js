import { CREATE, READ, UPDATE, DELETE, updateItem } from '..actions/actions';

const initialState = {
  menuItems: []
}

export default function (state = initialState, action) {
  switch (action.type) {

    case CREATE: return {
      menuItems: [...state.menuItems, action.payload.item];
    };

    case READ: return state;

    case UPDATE: {
      const updatedItem = {...action.payload.item};
      return {
        menuItems: [...state.menuItems].map( item => {
          if (item.id === updatedItem.id) {
            return updatedItem;
          }
          return item;
        })
      }
    }

    case DELETE: {
      const {id} = action.payload;
      return {
        menuItems: [...state.menuItems].filter(item => item.id !== id);
      }
    }

    default: return state;
  }
}