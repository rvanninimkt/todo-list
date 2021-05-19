export const toDosActionTypes = {
  toggle: "TOGGLE_TODO",
  add: "ADD_TODO",
  modify: "EDIT_TODO",
  remove: "REMOVE_TODO",
};

export const toDosActions = {
  toggle: (idToDo) => ({
    type: toDosActionTypes.toggle,
    payload: idToDo,
  }),
  add: (toDo) => ({
    type: toDosActionTypes.add,
    payload: toDo,
  }),
  modify: (toDo) => ({
    type: toDosActionTypes.modify,
    payload: toDo,
  }),
  remove: (idToDo) => ({
    type: toDosActionTypes.remove,
    payload: idToDo,
  }),
};