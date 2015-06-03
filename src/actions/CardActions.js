import uuid from 'node-uuid';

import ActionType from '../constants/ActionType';

export function addCard(listId, name) {
  const card = {
    name,
    id: uuid.v4(),
  };
  return {
    type: ActionType.Card.ADD,
    listId,
    card,
  };
}
