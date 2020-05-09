import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Container, Input, Button} from 'native-base';
import {connect} from 'react-redux';
import styles from '../styling/styles';
import {Get_input, Add_info} from '../actions/actions';

const mapDispatchToProps = dispatch => {
  return {
    Pass_In: val => dispatch(Get_input(val)),
    Add_Info: val => dispatch(Add_info(val)),
  };
};

class AddInfo extends Component {
  render() {
    return (
      <Container style={styles.add_main}>
        <View style={styles.add_info_container}>
          <Text style={styles.add_text}>How did you save a trip?</Text>
          <View style={styles.add_input_container}>
            <Input
              placeholder="(carpool, walking....etc)"
              style={styles.add_input}
              onChangeText={input => this.props.Pass_In(input)}
            />
          </View>
          <Text style={styles.add_text_key}>
            please use key words active or public in your description
          </Text>
          <Text style={styles.add_text}>Would you like to add a picture?</Text>
          <Button onPress={() => this.Sorry()} style={styles.add_button}>
            <Text style={styles.add_button_text}>Add</Text>
          </Button>
        </View>
        <View style={styles.done_button_container}>
          <Button style={styles.done_button} onPress={() => this.HomePage()}>
            <Text style={styles.add_done_button_text}>Done</Text>
          </Button>
        </View>
      </Container>
    );
  }

  Sorry() {}

  HomePage() {
    let temp_date = new Date();

    let date =
      this.GetMonthName(temp_date.getMonth()) +
      ' ' +
      temp_date.getDate() +
      ', ' +
      temp_date.getFullYear();

    window.alert('Trip Was Saved');

    this.props.Add_Info(date);
    this.props.navigation.navigate('HomePage');
  }

  GetMonthName(val) {
    switch (val) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
    }
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(AddInfo);
