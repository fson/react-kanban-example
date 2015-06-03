import invariant from 'invariant';

import ActionType from '../constants/ActionType';

const initialState = {};

function addCard(state, { listId, card }) {
  const list = state[listId];
  invariant(
    !!list,
    'ListStore.handleAddCard: Cannot add to a list "%s" that does not exist',
    listId
  );
  const nextList = {
    ...list,
    cards: list.cards.concat(card.id),
  };
  return {
    ...state,
    [listId]: nextList,
  };
}

function addList(state, { list }) {
  return {
    ...state,
    [list.id]: list,
  };
}

export default function listStore(state = initialState, action) {
  switch (action.type) {
    case ActionType.Card.ADD: return addCard(state, action);
    case ActionType.List.ADD: return addList(state, action);
  }
  return state;
}
