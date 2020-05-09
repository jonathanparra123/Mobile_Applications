import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styling/styles';

class About extends Component {
  render() {
    return (
      <View style={styles.about_main}>
        <View style={styles.about_main1}>
          <Text style={styles.about_text1}>Jonathan Parra</Text>
          <Text style={styles.about_text1}>jonathanparra123@yahoo.com</Text>
          <Text style={styles.about_text1}>
            Hi, my name is jonathan and i am an aspiring developer
          </Text>
        </View>
        <View style={styles.about_main2}>
          <Text style={styles.about_text2}>Instructions for app:</Text>
          <Text style={styles.about_text2}>
            When saving a trip, use key words active or public in lower case.
            for example: public, took the bus.
          </Text>
          <Text style={styles.about_text2}>
            Please create a profile before you add trips for a more accurate
            tracking of goals.
          </Text>
          <Text style={styles.about_text2}>
            Rewards will update when you view your list of trips made.
          </Text>
        </View>
        <View style={styles.about_main3}>
          <Text style={styles.about_text3}>Reward Landmarks:</Text>
          <Text style={styles.about_text3}>Third trip saved!</Text>
          <Text style={styles.about_text3}>Tenth trip saved!</Text>
          <Text style={styles.about_text3}>First active trip saved!</Text>
        </View>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('HomePage')}
        />
      </View>
    );
  }
}

export default connect(
  null,
  null,
)(About);
