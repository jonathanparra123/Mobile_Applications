import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/styling';
import movieService from '../services/movie.service';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data_movie: [],
      data_cast: [],
      movie: 'movie',
    };

    this.movieinfo = 0;
  }

  componentDidMount() {
    this._getMovies(this.movieinfo);
  }

  render() {
    const {movie_info} = this.props.route.params;
    this.movieinfo = movie_info;

    return this._renderMovies();
  }

  _getMovies(val) {
    movieService
      .getMovies(this.state.movie, 0, val)
      .then(results => {
        this.setState({data_movie: results});
      })
      .catch(error => {});

    movieService
      .getCast(val)
      .then(results => {
        this.setState({data_cast: results});
      })
      .catch(error => {});
  }

  _renderMovies() {
    return (
      <ScrollView
        style={styles.detail_container}
        contentContainerStyle={styles.scroll_content}>
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
          data={this.state.data_movie}
          renderItem={this._renderItem1}
          keyExtractor={(item, index) => index.toString()}
        />
        <FlatList
          data={this.state.data_cast}
          renderItem={this._renderItem2}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }

  _renderItem1 = ({item}) => {
    let gen = [];
    for (let i = 0; i < item.getGenres().length; i++) {
      if (i < 1) {
        gen[i] = item.getGenres()[i].name;
      } else {
        gen[i] = ',' + item.getGenres()[i].name;
      }
    }

    return (
      <View style={styles.main_container}>
        <Image
          style={styles.detail_image_size}
          source={{uri: item.getPoster()}}
        />
        <Text>
          <Text style={styles.change_text}>Title:</Text> {item.getTitle()}
        </Text>
        <Text>
          <Text style={styles.change_text}>Rating:</Text> {item.getRating()}
        </Text>
        <Text>
          <Text style={styles.change_text}>Release date:</Text>{' '}
          {item.getRelease()}
        </Text>
        <Text>
          <Text style={styles.change_text}>Renres:</Text> {gen}
        </Text>
        <Text>
          <Text style={styles.change_text}>Synopsis:</Text> {item.getSummary()}
        </Text>
        <Text>
          <Text style={styles.change_text}>Budget:</Text> {item.getBudget()}
        </Text>
        <Text>
          <Text style={styles.change_text}>Revenue:</Text> {item.getRevenue()}
        </Text>
        <Text>
          <Text style={styles.change_text}>Status:</Text> {item.getStatus()}
        </Text>
        <Text>
          <Text style={styles.change_text}>Cast:</Text>
        </Text>
      </View>
    );
  };

  _renderItem2 = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('PersonDetail', {
            person_info: item.getId(),
          });
        }}>
        <View style={styles.main_container}>
          <Text>{item.getName()}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}
