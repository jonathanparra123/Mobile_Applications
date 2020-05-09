import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './Main';
import Create from './Create';
import Detail from './Detail';
import Add from './AddItem';

const PageStack = createStackNavigator();
//navigation control between screens
export default class Nav extends Component {
  render() {
    return (
      <NavigationContainer>
        <PageStack.Navigator initialRouteName="HomePage" headerMode="none">
          <PageStack.Screen name="HomePage" component={HomePage} />
          <PageStack.Screen name="Create" component={Create} />
          <PageStack.Screen name="Detail" component={Detail} />
          <PageStack.Screen name="Add" component={Add} />
        </PageStack.Navigator>
      </NavigationContainer>
    );
  }
}
