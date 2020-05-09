import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Container, Icon} from 'native-base';
import {connect} from 'react-redux';
import styles from '../styling/styles';

const mapStateToProps = state => {
  return {
    reward: state.list_of_trips,
    goal: state.trip_count,
  };
};

class Rewards extends Component {
  render() {
    if (this.props.goal == 0 && this.props.reward.length <= 2) {
      return this.NoRewards();
    } else if (this.props.goal > 0 && this.props.reward.length < 3) {
      return this.ActiveReward();
    } else if (
      this.props.goal == 0 &&
      this.props.reward.length > 2 &&
      this.props.reward.length < 10
    ) {
      return this.FirstReward();
    } else if (this.props.goal == 0 && this.props.reward.length > 9) {
      return this.SecondReward();
    } else if (this.props.goal > 0 && this.props.reward.length > 9) {
      return this.ThirdReward();
    } else if (
      this.props.goal > 0 &&
      this.props.reward.length > 2 &&
      this.props.reward.length < 9
    ) {
      return this.ActiveAndTripReward();
    }
  }

  NoRewards() {
    return (
      <Container style={styles.rewards_main}>
        <Header style={styles.rewards_header}>
          <Text style={styles.rewards_header_text}>Rewards</Text>
        </Header>
      </Container>
    );
  }

  FirstReward() {
    return (
      <Container style={styles.rewards_main}>
        <Header style={styles.rewards_header}>
          <Text style={styles.rewards_header_text}>Rewards</Text>
        </Header>
        <View style={styles.rewards_container}>
          <Icon style={styles.rewards_icon} name="trophy" />
          <Text style={styles.rewards_text}>3rd trip saved!</Text>
        </View>
      </Container>
    );
  }

  ActiveReward() {
    return (
      <Container style={styles.rewards_main}>
        <Header style={styles.rewards_header}>
          <Text style={styles.rewards_header_text}>Rewards</Text>
        </Header>
        <View style={styles.rewards_container}>
          <Icon style={styles.rewards_icon} name="trophy" />
          <Text style={styles.rewards_text}>1st active trip saved!</Text>
        </View>
      </Container>
    );
  }

  SecondReward() {
    return (
      <Container style={styles.rewards_main}>
        <Header style={styles.rewards_header}>
          <Text style={styles.rewards_header_text}>Rewards</Text>
        </Header>
        <View style={styles.rewards_container}>
          <Icon style={styles.rewards_icon} name="trophy" />
          <Text style={styles.rewards_text}>3rd trip saved!</Text>
        </View>
        <View style={styles.rewards_container}>
          <Icon style={styles.rewards_icon} name="trophy" />
          <Text style={styles.rewards_text}>10th trip saved!</Text>
        </View>
      </Container>
    );
  }

  ActiveAndTripReward() {
    return (
      <Container style={styles.rewards_main}>
        <Header style={styles.rewards_header}>
          <Text style={styles.rewards_header_text}>Rewards</Text>
        </Header>
        <View style={styles.rewards_container}>
          <Icon style={styles.rewards_icon} name="trophy" />
          <Text style={styles.rewards_text}>3rd trip saved!</Text>
        </View>
        <View style={styles.rewards_container}>
          <Icon style={styles.rewards_icon} name="trophy" />
          <Text style={styles.rewards_text}>1st active trip saved!</Text>
        </View>
      </Container>
    );
  }

  ThirdReward() {
    return (
      <Container style={styles.rewards_main}>
        <Header style={styles.rewards_header}>
          <Text style={styles.rewards_header_text}>Rewards</Text>
        </Header>
        <View style={styles.rewards_container}>
          <Icon style={styles.rewards_icon} name="trophy" />
          <Text style={styles.rewards_text}>3rd trip saved!</Text>
        </View>
        <View style={styles.rewards_container}>
          <Icon style={styles.rewards_icon} name="trophy" />
          <Text style={styles.rewards_text}>10th trip saved!</Text>
        </View>
        <View style={styles.rewards_container}>
          <Icon style={styles.rewards_icon} name="trophy" />
          <Text style={styles.rewards_text}>1st active trip saved!</Text>
        </View>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  null,
)(Rewards);
