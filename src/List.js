import React from 'react';

import Card from './Card';
import Composer from './Composer';

const styles = {
  list: {
    background: '#eee',
    borderRadius: 3,
    display: 'flex',
    flex: '0 0 250px',
    flexDirection: 'column',
    margin: '0 5px',
    maxHeight: '100%',
    paddingTop: 8,
  },
  listCards: {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
    margin: '0 8px',
  },
  listName: {
    fontSize: 15,
    margin: '0 10px 8px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
  },
};

export default class List extends React.Component {
  render() {
    const {list} = this.props;
    return (
      <div style={styles.list}>
        <h2 style={styles.listName}>{list.name}</h2>
        <div style={styles.listCards}>
          {list.cards.map(card => <Card card={card} key={card.name} />)}
          <Composer label="Add a card…"
                    onAdd={this.handleAdd} />
        </div>
      </div>
    );
  }
}
