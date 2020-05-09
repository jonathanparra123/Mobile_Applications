import React, {Component} from 'react';
import HomePage from './HomePage';
import GetInfo from './AddInfo';
import Trips from './TripsPage';
import Detail from './DetailPage';
import Settings from './Settings';
import About from './About';
import Rewards from './Rewards';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const PageStack = createStackNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <PageStack.Navigator initialRouteName="HomePage" headerMode="none">
          <PageStack.Screen name="HomePage" component={HomePage} />
          <PageStack.Screen name="GetInfoPage" component={GetInfo} />
          <PageStack.Screen name="TripsPage" component={Trips} />
          <PageStack.Screen name="DetailPage" component={Detail} />
          <PageStack.Screen name="SettingsPage" component={Settings} />
          <PageStack.Screen name="About" component={About} />
          <PageStack.Screen name="Rewards" component={Rewards} />
        </PageStack.Navigator>
      </NavigationContainer>
    );
  }
}
