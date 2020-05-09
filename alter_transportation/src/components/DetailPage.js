import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Container, Content, Footer, Text, Input} from 'native-base';
import {connect} from 'react-redux';
import {Get_input, Edit_item} from '../actions/actions';
import styles from '../styling/styles';

const mapStateToProps = state => {
  return {
    data_list: state.individual_activity,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Pass_In: val => dispatch(Get_input(val)),
    Edit_Item: val => dispatch(Edit_item(val)),
  };
};

class DetailPage extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        delete: false,
        edit: false,
        done: true,
      });
  }

  render() {
    if (this.state.done === true) {
      return this.Normal_List();
    } else {
      return this.Edit_List();
    }
  }

  Edit_List() {
    return (
      <Container style={styles.detail_edit_container}>{this.EList()}</Container>
    );
  }

  Normal_List() {
    return (
      <Container style={styles.detail_main}>
        <Content>{this.List()}</Content>
        <Footer style={styles.detail_footer}>
          <View style={styles.detail_footer_container}>
            <Button
              onPress={() => this.SorryAgain()}
              style={styles.detail_button}>
              <Text>Delete</Text>
            </Button>
            <Button style={styles.detail_button} onPress={() => this.EditB()}>
              <Text>Edit</Text>
            </Button>
            <Button style={styles.detail_button} onPress={() => this.GoBack()}>
              <Text>Back</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }

  SorryAgain() {}

  EditB() {
    this.setState(prevState => {
      return {
        done: !prevState.done,
      };
    });
  }

  GoBack() {
    this.props.navigation.navigate('TripsPage');
  }

  EList() {
    return (
      <FlatList
        data={this.props.data_list}
        renderItem={this.e_renderitem}
        keyExtractor={this._keyExtractor}
        extraData={this.state}
      />
    );
  }

  List() {
    return (
      <FlatList
        data={this.props.data_list}
        renderItem={this._renderitem}
        keyExtractor={this._keyExtractor}
        extraData={this.state}
      />
    );
  }

  _keyExtractor = (item, index) => item.key;

  _renderitem = ({item}) => {
    return (
      <View style={styles.detail_list_container}>
        <Text style={styles.detail_list_text}>{item.input}</Text>
        <Text style={styles.detail_list_text}>{item.date}</Text>
      </View>
    );
  };

  e_renderitem = ({item}) => {
    if (item.getTime() < 172800) {
      return (
        <View style={styles.detail_edit_list_conatiner}>
          <View style={styles.detail_edit_input_container}>
            <Input
              style={styles.detail_edit_input}
              placeholder={item.getInput()}
              onChangeText={Input => this.props.Pass_In(Input)}
            />
          </View>
          <View>
            <Text style={styles.detail_edit_text}>(Change Input in Box)</Text>
            <Text style={styles.detail_edit_text}>{item.getDate()}</Text>
            <Button
              style={styles.detail_edit_submit}
              onPress={() => this.Confirm(item.getKey())}>
              <Text>Submit</Text>
            </Button>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.detail_edit_list_conatiner}>
          <Text style={styles.detail_edit_text}>{item.getInput()}</Text>
          <Text style={styles.detail_edit_text}>(Channot Edit Activity</Text>
          <Text style={styles.detail_edit_text}>
            it has been more that 48 hours)
          </Text>
          <Text style={styles.detail_edit_text}>{item.getDate()}</Text>
          <Button
            style={styles.detail_edit_submit}
            onPress={() => this.EditB()}>
            <Text>Go Back</Text>
          </Button>
        </View>
      );
    }
  };

  Confirm(val) {
    this.props.Edit_Item(val);

    this.setState(prevState => {
      return {
        done: !prevState.done,
      };
    });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailPage);
