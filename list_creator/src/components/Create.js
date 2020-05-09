import React, {Component} from 'react';
import {
  Button,
  Form,
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Text,
  Left,
  Right,
  CheckBox,
  ListItem,
} from 'native-base';
import styles from '../styles/styling';
import {getInfoList} from '../actions/action';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
//list creation page
const mapDispatchToProps = dispatch => {
  return {
    GetInfo: (icon, date, name) => dispatch(getInfoList(icon, date, name)),
  };
};

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ' ',
      icon1: false,
      icon2: false,
      icon3: false,
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              onPress={() => {
                this.props.navigation.navigate('HomePage');
              }}>
              <Text>Cancel</Text>
            </Button>
          </Left>
          <Right>
            <Button
              onPress={() => {
                this.NextPage();
              }}>
              <Text>Done</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Text style={styles.createlist_text}>Create list</Text>
          <Form>
            <Item>
              <Text>Name:</Text>
              <Input
                value={this.props.input}
                onChangeText={name => {
                  this.setState({name: name});
                }}
              />
            </Item>
            <Item>
              <Text>Select Icon:</Text>
            </Item>
            <ListItem>
              <CheckBox
                checked={this.state.icon1}
                onPress={() =>
                  this.setState({icon1: true, icon2: false, icon3: false})
                }
              />
              <Icon name="cafe" />
            </ListItem>
            <ListItem>
              <CheckBox
                checked={this.state.icon2}
                onPress={() =>
                  this.setState({icon1: false, icon2: true, icon3: false})
                }
              />
              <Icon name="cart" />
            </ListItem>
            <ListItem>
              <CheckBox
                checked={this.state.icon3}
                onPress={() =>
                  this.setState({icon1: false, icon2: false, icon3: true})
                }
              />
              <Icon name="cash" />
            </ListItem>
          </Form>
        </Content>
      </Container>
    );
  }

  NextPage() {
    let temp_icon = '';

    let temp_date = new Date();

    let date =
      temp_date.getMonth() +
      '-' +
      temp_date.getDate() +
      '-' +
      temp_date.getFullYear();

    if (this.state.icon1 === true) {
      temp_icon = 'cafe';
    } else if (this.state.icon2 === true) {
      temp_icon = 'cart';
    } else if (this.state.icon3 === true) {
      temp_icon = 'cash';
    }

    Alert.alert('the list has been added');
    this.props.GetInfo(temp_icon, date, this.state.name);
    this.props.navigation.navigate('HomePage');
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Create);
