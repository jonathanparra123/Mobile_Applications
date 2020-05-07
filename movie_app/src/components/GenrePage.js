import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from '../styles/styling';
import movieService from '../services/movie.service';

export default class BrowsePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      movie: 'movielist',
    };

    this.genreid = 0;
  }

  componentDidMount() {
    this._getMovies(this.genreid);
  }

  render() {
    const {genre_id} = this.props.route.params;
    const {genre_name} = this.props.route.params;
    this.genreid = genre_id;

    return (
      <View style={styles.genre_container}>
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
        <Text style={styles.genre_title}>{genre_name}</Text>
        {this._renderMovies()}
      </View>
    );
  }

  _getMovies(val) {
    movieService
      .getMovies(this.state.movie, val, 0)
      .then(results => {
        this.setState({data: results});
      })
      .catch(error => {});
  }

  _renderMovies() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }

  _renderItem = ({item}) => {
    let temp = item.getSummary();
    let short = '';

    for (let i = 0; i < 50; i++) {
      short += temp[i];
    }

    return (
      <TouchableOpacity
        style={styles.item_container}
        onPress={() => {
          this.props.navigation.navigate('MovieDetail', {movie_info: item.id});
        }}>
        <Image style={styles.image_size} source={{uri: item.getPoster()}} />
        <View>
          <Text style={styles.genre_item}>Title: {item.getTitle()}</Text>
          <Text style={styles.genre_item}>Rating: {item.getRating()}</Text>
          <Text style={styles.genre_item}>
            Relase Date: {item.getRelease()}
          </Text>
          <Text style={styles.genre_item}>Synopsis: {short}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}
