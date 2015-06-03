import ActionType from '../constants/ActionType';

const initialState = {
  name: 'My Board',
  lists: [],
};

function addList(state, { list }) {
  return {
    ...state,
    lists: state.lists.concat(list.id),
  };
}

export default function boardStore(state = initialState, action) {
  switch (action.type) {
    case ActionType.List.ADD: return addList(state, action);
  }
  return state;
}
