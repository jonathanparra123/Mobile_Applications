import React, {Component} from 'react';
import Navigation from './Navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../reducer/reducer';

const store = createStore(reducer);

export default class ReduxWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
