import ActionType from '../constants/ActionType';

const initialState = {};

function addCard(state, { card }) {
  return {
    ...state,
    [card.id]: card,
  };
}

export default function cardStore(state = initialState, action) {
  switch (action.type) {
    case ActionType.Card.ADD: return addCard(state, action);
  }
  return state;
}
