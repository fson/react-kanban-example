import React from 'react';
import { root } from 'redux';

import BoardContainer from './BoardContainer';
import stores from './stores';

@root(stores)
export default class App extends React.Component {
  render() {
    return <BoardContainer />;
  }
}
