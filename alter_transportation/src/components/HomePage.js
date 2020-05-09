import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Header, Container, Icon} from 'native-base';
import styles from '../styling/styles';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    count: state.list_of_trips,
    goal: state.trip_count,
  };
};

class HomePage extends Component {
  render() {
    return (
      <Container style={styles.home_main}>
        <Header style={styles.home_header}>
          <Text style={styles.home_header_text}>Welcome To TripSaver</Text>
        </Header>
        <View style={styles.home_buttons_container_1}>
          <Button style={styles.home_buttons_1} onPress={() => this.NextPage()}>
            <Text style={styles.home_buttons_text}>Save Trip</Text>
          </Button>
          <Button
            style={styles.home_buttons_1}
            onPress={() => this.TripsPage()}>
            <Text style={styles.home_buttons_text}>View Trips</Text>
          </Button>
        </View>
        <View style={styles.home_buttons_container_2}>
          <Button
            style={styles.home_buttons_2}
            onPress={() => this.props.navigation.navigate('SettingsPage')}>
            <Icon style={styles.home_icons} name="cog" />
          </Button>
          <Button
            style={styles.home_buttons_2}
            onPress={() => this.props.navigation.navigate('Rewards')}>
            <Icon style={styles.home_icons} name="trophy" />
          </Button>
          <Button
            style={styles.home_buttons_2}
            onPress={() => this.props.navigation.navigate('About')}>
            <Text style={styles.home_question}>?</Text>
          </Button>
        </View>
      </Container>
    );
  }

  NextPage() {
    this.props.navigation.navigate('GetInfoPage');
  }

  TripsPage() {
    if (this.props.count.length == 3) {
      window.alert('Reward: you saved your third trip!');
    } else if (this.props.count.length == 10) {
      window.alert('Reward: you saved your tenth trip!');
    } else if (this.props.goal == 1) {
      window.alert('Reward: you saved your first active trip!');
    }
    this.props.navigation.navigate('TripsPage');
  }
}

export default connect(
  mapStateToProps,
  null,
)(HomePage);
