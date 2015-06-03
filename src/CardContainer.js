import React from 'react';
import { Container } from 'redux';

import Card from './Card';
import { cardStore } from './stores';

export default class CardContainer extends React.Component {
  render() {
    return (
      <Container stores={[cardStore]}>
        {(props) => <Card {...props} card={props[this.props.cardId]} />}
      </Container>
    );
  }
}
