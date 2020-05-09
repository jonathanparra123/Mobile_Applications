import React, {Component} from 'react';
import {Button, Container, Content, Item, Input, Text} from 'native-base';
import styles from '../styles/styling';
import {changeInputAdd} from '../actions/action';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
//adding items to a list page
const mapDispatchToProps = dispatch => {
  return {
    ChangeInput: item => dispatch(changeInputAdd(item)),
  };
};

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ' ',
    };
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.Add_main}>
          <Item>
            <Input
              placeholder="add item here"
              value={this.props.input}
              onChangeText={name => {
                this.setState({name: name});
              }}
            />
          </Item>
          <Button style={styles.Add_button} onPress={() => this.NextPage()}>
            <Text style={styles.Add_text}>Add</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  NextPage() {
    Alert.alert('item has been added to list');
    this.props.ChangeInput(this.state.name);
    this.props.navigation.navigate('HomePage');
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(AddItem);
