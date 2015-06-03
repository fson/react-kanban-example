import React, { PropTypes } from 'react';

import CardContainer from './CardContainer';
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
  static propTypes = {
    list: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    addCard: PropTypes.func.isRequired,
  }

  handleAdd = (name) => {
    this.props.addCard(this.props.list.id, name);
  }

  render() {
    const { list } = this.props;
    const children = list.cards.map(cardId =>
      <CardContainer key={cardId} cardId={cardId} />
    );
    return (
      <div style={styles.list}>
        <h2 style={styles.listName}>{list.name}</h2>
        <div style={styles.listCards}>
          {children}
          <Composer label="Add a card…"
                    onAdd={this.handleAdd} />
        </div>
      </div>
    );
  }
}
