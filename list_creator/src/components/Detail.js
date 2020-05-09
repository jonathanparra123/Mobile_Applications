import React, {Component} from 'react';
import {FlatList, TouchableOpacity, Alert} from 'react-native';
import {
  Header,
  Container,
  Left,
  Right,
  Button,
  Content,
  Text,
} from 'native-base';
import {connect} from 'react-redux';
import {delete_Item, detail_Item} from '../actions/action';
import styles from '../styles/styling';
//item view in a list 
const mapStateToProps = state => {
  return {
    data_items: state.list_items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Pass_in: val => dispatch(detail_Item(val)),
    DeleteI: val => dispatch(delete_Item(val)),
  };
};

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: [],
    };
  }

  render() {
    return this.List();
  }

  List() {
    return (
      <Container>
        <Header style={styles.detail_container}>
          <Left style={styles.detail_body_container}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('HomePage');
              }}>
              <Text>Home</Text>
            </Button>
          </Left>
          <Right>
            <Button onPress={() => this.props.navigation.navigate('Add')}>
              <Text style={{fontSize: 30}}>+</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.detail_body_container}>
          <Text style={styles.detail_lists_text}>items</Text>
          {this._renderlists()}
        </Content>
      </Container>
    );
  }

  Delete_I() {
    Alert.alert('item has been deleted');
    this.props.DeleteI();
  }

  _renderlists() {
    return (
      <FlatList
        data={this.props.data_items}
        renderItem={this._renderitem}
        keyExtractor={this._keyExtractor}
      />
    );
  }

  _keyExtractor = (item, index) => item.getKeyi();

  _renderitem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.render_container_detail}
        onPress={() => this.Change()}>
        <Text>{item.getNamei()}</Text>
      </TouchableOpacity>
    );
  };

  Change() {
    this.setState(prevState => {
      return {
        change: !prevState.change,
      };
    });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
