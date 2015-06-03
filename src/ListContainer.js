import React from 'react';
import { Container } from 'redux';

import List from './List';
import { addCard } from './actions/CardActions';
import { listStore } from './stores';


export default class ListContainer extends React.Component {
  render() {
    return (
      <Container stores={[listStore]}
                 actions={{ addCard }}>
        {(props) => <List {...props} list={props[this.props.listId]} />}
      </Container>
    );
  }
}
