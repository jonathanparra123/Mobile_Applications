import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {
  Container,
  Content,
  Header,
  Text,
  Button,
  Icon,
  Footer,
} from 'native-base';
import {connect} from 'react-redux';
import {Delete_item, Individual} from '../actions/actions';
import styles from '../styling/styles';

const mapStateToProps = state => {
  return {
    list_data: state.list_of_trips,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Delete_Item: val => dispatch(Delete_item(val)),
    Pass_In: val => dispatch(Individual(val)),
  };
};

class TripsPage extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        delete_button: false,
      });
  }

  render() {
    if (this.state.delete_button == false) {
      return this.Normal_List();
    } else {
      return this.Delete_List();
    }
  }

  Normal_List() {
    return (
      <Container style={styles.trips_main}>
        <Header style={styles.trips_header}>
          <View style={styles.trips_header_container}>
            <Button onPress={() => this.DeleteOp()}>
              <Icon name="trash" />
            </Button>
            <Text style={styles.trips_text}>Trip History</Text>
            <Button onPress={() => this.props.navigation.navigate('HomePage')}>
              <Text>Home</Text>
            </Button>
          </View>
        </Header>
        <Content style={styles.trips_container_content}>{this.List()}</Content>
      </Container>
    );
  }

  List() {
    return (
      <FlatList
        data={this.props.list_data}
        renderItem={this._renderitem}
        keyExtractor={this._keyExtractor}
        extraData={this.state}
      />
    );
  }

  _keyExtractor = (item, index) => item.key;

  _renderitem = ({item}) => {
    return (
      <Button
        style={styles.trips_individual_button}
        onPress={() => this.DetailPage(item.key)}>
        <View style={styles.trips_list_container}>
          <Text style={styles.trips_list_text}>{item.input}</Text>
          <Text style={styles.trips_list_text}>{item.date}</Text>
        </View>
      </Button>
    );
  };

  DetailPage(val) {
    this.props.Pass_In(val);

    this.props.navigation.navigate('DetailPage');
  }

  Delete_List() {
    return (
      <Container style={styles.trips_main}>
        <Header style={styles.trips_header}>
          <Text style={styles.trips_text}>Select An Activity to Delete</Text>
        </Header>
        <Content style={styles.trips_container_content}>{this.DList()}</Content>
        <Footer style={styles.trips_footer}>
          <Button
            style={styles.trips_individual_button}
            onPress={() => this.Revert()}>
            <Text style={styles.trips_list_text}>Done</Text>
          </Button>
        </Footer>
      </Container>
    );
  }

  Revert() {
    this.setState(prevState => {
      return {
        delete_button: !prevState.delete_button,
      };
    });
  }

  DList() {
    return (
      <FlatList
        data={this.props.list_data}
        renderItem={this._renderitemD}
        keyExtractor={this._keyExtractor}
        extraData={this.state}
      />
    );
  }

  _keyExtractor = (item, index) => item.key;

  _renderitemD = ({item}) => {
    return (
      <View style={styles.trips_list_container}>
        <Text style={styles.trips_list_text_nonblack}>{item.input}</Text>
        <Text style={styles.trips_list_text_nonblack}>{item.date}</Text>
        <Button
          style={styles.trips_individual_button}
          onPress={() => this.Delete(item.key)}>
          <Text style={styles.trips_list_text}>Delete</Text>
        </Button>
      </View>
    );
  };

  Delete(val) {
    window.alert('Activity Was Deleted');
    this.props.Delete_Item(val);
  }

  DeleteOp() {
    this.setState(prevState => {
      return {
        delete_button: !prevState.delete_button,
      };
    });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TripsPage);
