import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from '../styles/styling';
import searchService from '../services/search.service';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person_data: null,
    };

    this.person_name = '';
  }

  componentDidMount() {
    this.GetPerson(this.person_name);
  }

  render() {
    const {person_name} = this.props.route.params;
    this.person_name = person_name;

    return this.List();
  }

  GetPerson(val) {
    searchService
      .getPerson(val)
      .then(results => {
        this.setState({person_data: results});
      })
      .catch(error => {});
  }

  List() {
    return (
      <View>
        <View style={styles.tab_container}>
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
        <FlatList
          data={this.state.person_data}
          renderItem={this._renderItem1}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  _renderItem1 = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.list_container}
        onPress={() => {
          this.props.navigation.navigate('PersonDetail', {
            person_info: item.getId(),
          });
        }}>
        <Image
          style={styles.list_detail_image_size}
          source={{uri: item.getImage()}}
        />
        <View>
          <Text style={styles.list_change_text}>Name: {item.getName()}</Text>
          <Text style={styles.list_change_text}>
            Popularity: {item.getPopular()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
}
