import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styling from '../styles/styling';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={styling.home_screen_container}>
        <View style={styling.navigation_bar}>
          <TouchableOpacity
            style={styling.browse_button}
            onPress={() => {
              this.props.navigation.navigate('BrowsePage');
            }}>
            <Text style={styling.browse_text}>Browse</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styling.browse_button}
            onPress={() => {
              this.props.navigation.navigate('SelectPage');
            }}>
            <Text style={styling.browse_text}>Search</Text>
          </TouchableOpacity>
        </View>

        <View style={styling.welcome}>
          <Text style={styling.welcome_sign}>Welcome to the Movie App</Text>

          <Text>made by Jonathan Parra</Text>
        </View>
      </View>
    );
  }
}
