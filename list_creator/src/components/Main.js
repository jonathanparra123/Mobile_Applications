import React, {Component} from 'react';
import {TouchableOpacity, Text, FlatList} from 'react-native';
import {
  Header,
  Container,
  Left,
  Right,
  Button,
  Content,
  Icon,
} from 'native-base';
import styles from '../styles/styling';
import {delete_List, detail_Item} from '../actions/action';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
//home page screen
const mapStateToProps = state => {
  return {
    list: state.lists,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Pass: val => dispatch(detail_Item(val)),
    DeleteList: val => dispatch(delete_List(val)),
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      del_select: false,
    };
  }

  render() {
    return this.Lists();
  }

  Lists() {
    return (
      <Container>
        <Header style={styles.main_container}>
          <Left>
            <Button
              style={{width: 60}}
              onPress={() => {
                this.setState({del_select: !this.state.del_select});
              }}>
              <Icon name="trash" />
            </Button>
          </Left>
          <Right>
            <Button
              style={{width: 60, justifyContent: 'center'}}
              onPress={() => {
                this.props.navigation.navigate('Create');
              }}>
              <Text style={{fontSize: 30, color: 'white'}}>+</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.main_body_container}>
          <Text style={styles.main_lists_text}>Lists</Text>
          {this._renderlists()}
        </Content>
      </Container>
    );
  }

  DeleteL(key) {
    Alert.alert('List has been deleted');
    this.setState({del_select: !this.state.del_select});
    this.props.DeleteList(key);
  }

  PassKey(key) {
    this.props.Pass(key);
    this.props.navigation.navigate('Detail');
  }

  _renderlists() {
    if (!this.state.del_select) {
      return (
        <FlatList
          data={this.props.list}
          renderItem={this._renderitem}
          keyExtractor={this._keyExtractor}
        />
      );
    } else {
      return (
        <FlatList
          data={this.props.list}
          renderItem={this._renderitem_del}
          keyExtractor={this._keyExtractor_del}
        />
      );
    }
  }

  _keyExtractor = (item, index) => item.getKey();

  _renderitem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.render_container_main}
        onPress={() => this.PassKey(item.getKey())}>
        <Icon name={item.getIcon()} />
        <Text>{item.getName()}</Text>
        <Text>{item.getDate()}</Text>
      </TouchableOpacity>
    );
  };

  _keyExtractor_del = (item, index) => item.getKey();

  _renderitem_del = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.render_container_main_del}
        onPress={() => this.DeleteL(item.getKey())}>
        <Icon name={item.getIcon()} />
        <Text>{item.getName()}</Text>
        <Text>{item.getDate()}</Text>
      </TouchableOpacity>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
