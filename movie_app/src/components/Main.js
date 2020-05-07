import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from './Homescreen';
import BrowsePage from './BrowsePage';
import GenrePage from './GenrePage';
import MovieDetail from './MovieDetail';
import SelectPage from './SelectPage';
import SearchPerson from './SearchPerson';
import SearchMovie from './SearchMovie';
import PersonDetail from './PersonDetail';
import SearchList from './SearchList';
import SearchListM from './SearchListM';

const PageStack = createStackNavigator();

export default class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <PageStack.Navigator initialRouteName="HomePage" headerMode="none">
          <PageStack.Screen name="HomePage" component={Homescreen} />
          <PageStack.Screen name="BrowsePage" component={BrowsePage} />
          <PageStack.Screen name="GenrePage" component={GenrePage} />
          <PageStack.Screen name="MovieDetail" component={MovieDetail} />
          <PageStack.Screen name="SelectPage" component={SelectPage} />
          <PageStack.Screen name="SearchPerson" component={SearchPerson} />
          <PageStack.Screen name="SearchMovie" component={SearchMovie} />
          <PageStack.Screen name="PersonDetail" component={PersonDetail} />
          <PageStack.Screen name="SearchList" component={SearchList} />
          <PageStack.Screen name="SearchListM" component={SearchListM} />
        </PageStack.Navigator>
      </NavigationContainer>
    );
  }
}
