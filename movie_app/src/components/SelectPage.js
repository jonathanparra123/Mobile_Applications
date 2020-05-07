import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/styling';

export default class SelectPage extends Component {
  render() {
    return (
      <View style={styles.select_container}>
        <View style={styles.tab_container2}>
          <Text
            style={styles.tab_boxes}
            onPress={() => this.props.navigation.goBack()}>
            Back
          </Text>
          <Text
            style={styles.tab_boxes}
            onPress={() => this.props.navigation.navigate('HomePage')}>
            Home
          </Text>
        </View>
        <View style={styles.select_container_main}>
          <Text>Please select a Person or a Movie to Search</Text>
          <TouchableOpacity
            style={styles.select_buttons}
            onPress={() => {
              this.props.navigation.navigate('SearchPerson');
            }}>
            <Text style={styles.select_button_text}>Person</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.select_buttons}
            onPress={() => {
              this.props.navigation.navigate('SearchMovie');
            }}>
            <Text style={styles.select_button_text}>Movie</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  SetVal(val) {
    this.setState(prevState => {
      return {
        search: val,
      };
    });
  }
}
