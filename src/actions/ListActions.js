import uuid from 'node-uuid';

import ActionType from '../constants/ActionType';

export function addList(boardId, name) {
  const list = {
    name,
    cards: [],
    id: uuid.v4(),
  };
  return {
    type: ActionType.List.ADD,
    boardId,
    list,
  };
}
