import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import styles from '../styles/styling';
import searchService from '../services/search.service';

export default class PersonDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person_data: null,
      movie_data: null,
    };

    this.person_id = 0;
  }

  componentDidMount() {
    this.GetPersonDetail(this.person_id);
  }

  render() {
    const {person_info} = this.props.route.params;
    this.person_id = person_info;

    return this.DetailList();
  }

  GetPersonDetail(val) {
    searchService
      .getPersonDetail(val)
      .then(results => {
        this.setState({person_data: results});
      })
      .catch(error => {});

    searchService
      .getMovieForP(val)
      .then(results => {
        this.setState({movie_data: results});
      })
      .catch(error => {});
  }

  DetailList() {
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
          data={this.state.person_data}
          renderItem={this._renderItem1}
          keyExtractor={(item, index) => index.toString()}
        />
        <FlatList
          data={this.state.movie_data}
          renderItem={this._renderItem2}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }

  _renderItem1 = ({item}) => {
    return (
      <View style={styles.person_container}>
        <Image
          style={styles.Person_detail_image_size}
          source={{uri: item.getImage()}}
        />

        <Text style={styles.person_text}>
          <Text style={styles.Person_list_change_text}>Name:</Text>{' '}
          {item.getName()}
        </Text>
        <Text style={styles.person_text}>
          <Text style={styles.Person_list_change_text}>Popularity:</Text>{' '}
          {item.getPopular()}
        </Text>
        <Text style={styles.person_text}>
          <Text style={styles.Person_list_change_text}>BirthDate:</Text>{' '}
          {item.getBirth()}
        </Text>
        <Text style={styles.person_text}>
          <Text style={styles.Person_list_change_text}>DeathDate:</Text>{' '}
          {item.getDeath()}
        </Text>
        <Text style={styles.person_text}>
          <Text style={styles.Person_list_change_text}>Place of Birth:</Text>{' '}
          {item.getCity()}
        </Text>
        <Text style={styles.person_text}>
          <Text style={styles.Person_list_change_text}>Bio:</Text>{' '}
          {item.getBio()}
        </Text>
        <Text style={styles.person_text}>
          <Text style={styles.Person_list_change_text}>Movies:</Text>
        </Text>
      </View>
    );
  };

  _renderItem2 = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('MovieDetail', {
            movie_info: item.id,
          });
        }}>
        <View style={styles.person_container}>
          <Image style={styles.detail_image} source={{uri: item.getPoster()}} />

          <Text style={styles.person_text}>
            <Text style={styles.Person_list_change_text}>Title:</Text>{' '}
            {item.getTitle()}
          </Text>
          <Text style={styles.person_text}>
            <Text style={styles.Person_list_change_text}>Release:</Text>{' '}
            {item.getRelease()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
}
