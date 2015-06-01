import React from 'react';

import List from './List';

const styles = {
  board: {
    backgroundColor: '#34495e',
    display: 'flex',
    alignItems: 'flex-start',
    fontFamily: '"Helvetica Neue", Arial, Helvetica, sans-serif',
    padding: 30,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflowX: 'auto',
    overflowY: 'hidden',
  },
};

export default class Board extends React.Component {
  render() {
    const {board} = this.props;
    const children = board.lists.map(list => <List key={list.id} list={list} />);
    return (
      <div style={styles.board}>
        {children}
      </div>
    );
  }
}
