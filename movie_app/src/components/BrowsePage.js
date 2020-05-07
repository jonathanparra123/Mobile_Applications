import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

import styles from '../styles/styling';
import movieService from '../services/movie.service';

export default class BrowsePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      genre: 'genre',
    };
  }

  componentDidMount() {
    this._getMovies();
  }

  render() {
    return (
      <View style={styles.browse_container}>
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
        <Text style={styles.title}>Genres:</Text>
        {this._renderMovies()}
      </View>
    );
  }

  _getMovies() {
    movieService
      .getMovies(this.state.genre, 0, 0)
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
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('GenrePage', {
            genre_name: item.genre,
            genre_id: item.id,
          });
        }}>
        <Text style={styles.item}>{item.getGenre()}</Text>
      </TouchableOpacity>
    );
  };
}
