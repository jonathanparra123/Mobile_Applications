import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Nav from './Nav';
import reducer from '../reducers/listReducer';

const store = createStore(reducer);
//redux wrapper
export default class ReduxWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}
