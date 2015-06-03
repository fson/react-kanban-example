import React from 'react';
import { Container } from 'redux';

import Board from './Board';
import { addList } from './actions/ListActions';
import { boardStore } from './stores';

export default class BoardContainer extends React.Component {
  render() {
    return (
      <Container stores={[boardStore]}
                 actions={{ addList }}>
        {(props) => <Board {...props} board={props} /> }
      </Container>
    );
  }
}
