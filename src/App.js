import React from 'react';

import Board from './Board';

const board = {
  name: 'My Board',
  lists: [
    {
      id: 1,
      name: 'Todo',
      cards: [
        {
          name: 'Write tests',
        },
        {
          name: 'Implement',
        },
        {
          name: 'Publish',
        },
        {
          name: 'Market',
        },
        {
          name: 'Rinse',
        },
        {
          name: 'Repeat',
        },
      ],
    },
    {
      id: 2,
      name: 'Doing',
      cards: [
        {
          name: 'Experiment',
        },
      ],
    },
    {
      id: 3,
      name: 'Done',
      cards: [
        {
          name: 'Setup',
        },
        {
          name: 'Idea',
        },
      ],
    },
  ],
};

export default class App extends React.Component {
  render() {
    return <Board board={board} />;
  }
}
