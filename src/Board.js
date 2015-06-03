import React from 'react';

import Composer from './Composer';
import ListContainer from './ListContainer';

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
  handleAdd = (name) => {
    this.props.addList(this.props.board.id, name);
  }

  render() {
    const { board } = this.props;
    const lists = board.lists.map(listId =>
      <ListContainer key={listId} listId={listId} />
    );
    return (
      <div style={styles.board}>
        {lists}
        <Composer label="Add a list…"
                  onAdd={this.handleAdd} />
      </div>
    );
  }
}
