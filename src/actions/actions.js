export const CREATE = 'add new item';
export const READ = 'fetch all items';
export const UPDATE = 'update item';
export const DELETE = 'delete item';

export const createItem = () => ({
  type: CREATE,
  payload: {item}
});

export const readItems = () => ({
  type: READ
});

export const updateItem = (item) => ({
  type: UPDATE,
  payload: {item}
});

export const deleteItem = (id) => ({
  type: DELETE,
  payload: {id}
});