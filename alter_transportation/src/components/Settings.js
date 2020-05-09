import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {Container, Header, Text, Button, Input} from 'native-base';
import {connect} from 'react-redux';
import {
  Get_input,
  Get_input_address,
  Person,
  Delete_profile,
} from '../actions/actions';
import styles from '../styling/styles';

const mapStateToProps = state => {
  return {
    data_list: state.person_list,
    added_p: state.added_profile,
    trans: state.goals,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Pass_In_Name: val => dispatch(Get_input(val)),
    Pass_In_Address: val => dispatch(Get_input_address(val)),
    Person_Add: () => dispatch(Person()),
    Delete: () => dispatch(Delete_profile()),
  };
};

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      added: false,
    };
  }

  render() {
    if (this.props.added_p == false) {
      if (this.state.added == false) {
        return this.AddInfo();
      } else {
        return this.InfoInput();
      }
    } else {
      return this.Info();
    }
  }

  AddInfo() {
    return (
      <Container style={styles.settings_container}>
        <Header style={styles.settings_add_profile_header}>
          <Text style={styles.settings_add_profile_header_text}>Profile</Text>
        </Header>
        <View style={styles.settings_main_add_button}>
          <Button
            style={styles.settings_add_profile_button}
            onPress={() => this.Add_Profile()}>
            <Text style={styles.settings_add_profile_button_text}>
              Add a Profile
            </Text>
          </Button>
        </View>
      </Container>
    );
  }

  Add_Profile() {
    this.setState(prevState => {
      return {
        added: !prevState.added,
      };
    });
  }

  InfoInput() {
    return (
      <Container style={styles.settings_container}>
        <View style={styles.settings_main}>
          <Text style={styles.settings_text}>Name:</Text>
          <View style={styles.settings_input_container}>
            <Input onChangeText={input => this.props.Pass_In_Name(input)} />
          </View>
          <Text style={styles.settings_text}>Address:</Text>
          <View style={styles.settings_input_container}>
            <Input onChangeText={input => this.props.Pass_In_Address(input)} />
          </View>
          <Button
            style={styles.settings_submit_button}
            onPress={() => this.Adding()}>
            <Text style={styles.settings_submit_text}>Submit</Text>
          </Button>
        </View>
      </Container>
    );
  }

  Adding() {
    window.alert('Profile was created!');
    this.props.Person_Add();
  }

  Info() {
    return (
      <Container style={styles.settings_container}>{this.List()}</Container>
    );
  }

  List() {
    return (
      <View style={styles.settings_info_main}>
        <FlatList
          data={this.props.data_list}
          renderItem={this._renderitem}
          keyExtractor={this._keyExtractor}
          extraData={this.state}
        />
        <FlatList
          data={this.props.trans}
          renderItem={this._renderitemG}
          keyExtractor={this._keyExtractor}
          extraData={this.state}
        />
      </View>
    );
  }

  _keyExtractor = (item, index) => item.key;

  _renderitem = ({item}) => {
    return (
      <View style={styles.settings_info_main1}>
        <Text style={styles.settings_info_text}>Name: {item.name}</Text>
        <Text style={styles.settings_info_text}>Address: {item.address}</Text>
      </View>
    );
  };

  _renderitemG = ({item}) => {
    return (
      <View style={styles.settings_info_main2}>
        <Text style={styles.settings_info_text}>Goals</Text>
        <Text style={styles.settings_info_text}>
          Active Transportation: {item.active}
        </Text>
        <Text style={styles.settings_info_text}>
          Public Transportation: {item.public}
        </Text>
        <Text style={styles.settings_info_text}>Total: {item.total}</Text>
        <View>
          <Button onPress={() => this.Pdelete()}>
            <Text>delete profile</Text>
          </Button>
        </View>
      </View>
    );
  };

  Pdelete() {
    window.alert('Profile has been deleted');
    this.props.Delete();
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
