import React from 'react';

const styles = {
  card: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
    borderRadius: 3,
    marginBottom: 6,
    minHeight: 20,
    padding: '6px 8px 4px',
    cursor: 'pointer',
  },
  cardName: {
    color: '#444',
    fontSize: 14,
    margin: '0 0 4px',
    textDecoration: 'none',
    wordWrap: 'break-word',
  },
};

export default class Card extends React.Component {
  render() {
    const { card } = this.props;
    const url = `/cards/${card.id}`;
    return (
      <div style={styles.card}>
        <a style={styles.cardName} href={url}>
          {card.name}
        </a>
      </div>
    );
  }
}
