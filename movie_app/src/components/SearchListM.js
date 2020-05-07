import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from '../styles/styling';
import searchService from '../services/search.service';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie_data: null,
    };
    this.movie_name = '';
  }

  componentDidMount() {
    this.GetMovie(this.movie_name);
  }

  render() {
    const {movie_data} = this.props.route.params;
    this.movie_name = movie_data;

    return this.List();
  }

  GetMovie(val) {
    searchService
      .getMovieDetail(val)
      .then(results => {
        this.setState({movie_data: results});
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
          data={this.state.movie_data}
          renderItem={this._renderItem2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  _renderItem2 = ({item}) => {
    let temp = item.getSummary();
    let short = '';

    for (let i = 0; i < 50; i++) {
      short += temp[i];
    }

    return (
      <TouchableOpacity
        style={styles.list_container}
        onPress={() => {
          this.props.navigation.navigate('MovieDetail', {
            movie_info: item.getId(),
          });
        }}>
        <Image
          style={styles.list_detail_image_size}
          source={{uri: item.getPoster()}}
        />
        <View style={styles.list_container}>
          <Text style={styles.list_text}>Name: {item.getTitle()}</Text>
          <Text style={styles.list_text}>Rating: {item.getRating()}</Text>
          <Text style={styles.list_text}>Relase Date: {item.getRelease()}</Text>
          <Text style={styles.list_text}>Synopsis: {short}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}
