import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from '../styles/styling';

export default class SearchPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    return (
      <View style={styles.search_container}>
        <View style={styles.tab_container2}>
          <Text
            style={styles.tab_boxes}
            onPress={() => this.props.navigation.goBack()}>
            Back
          </Text>
          <Text
            style={styles.tab_boxes}
            onPress={() => this.props.navigation.navigate('HomePage')}>
            Home
          </Text>
        </View>
        <View style={styles.select_container_main}>
          <Text style={{fontSize: 20, alignSelf: 'center'}}>Search:</Text>
          <TextInput
            style={styles.search_bar}
            onChangeText={val => this.SetVal(val)}
            value={this.state.search}
            onSubmitEditing={() =>
              this.props.navigation.navigate('SearchListM', {
                movie_data: this.state.search,
              })
            }
          />
        </View>
      </View>
    );
  }

  SetVal(val) {
    this.setState(prevState => {
      return {
        search: val,
      };
    });
  }
}
