import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  //search page
  search_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  search_bar: {
    borderWidth: 3,
    borderColor: 'gray',
    height: 50,
    width: 200,
    fontSize: 20,
  },

  //Home screen
  browse_text: {
    fontSize: 25,
    color: 'red',
    textAlign: 'center',
  },

  browse_button: {
    height: 40,
    width: 100,
  },

  welcome_sign: {
    fontSize: 30,
  },

  navigation_bar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  home_screen_container: {
    flex: 1,
    backgroundColor: 'white',
  },

  welcome: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  //browsing page
  browse_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 40,
  },

  item: {
    textAlign: 'center',
    marginBottom: 5,
  },

  //Genre page
  genre_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  item_container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    width: 400,
    borderWidth: 1,
    borderColor: 'gray',
  },

  genre_title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 40,
  },

  genre_item: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },

  image_size: {
    height: 80,
    width: 50,
  },

  //movie detail
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  detail_container: {
    flex: 1,
    backgroundColor: 'white',
  },

  scroll_content: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  detail_image_size: {
    height: 400,
    width: 300,
  },

  change_text: {
    color: 'blue',
    fontSize: 15,
  },

  //select page
  select_container: {
    flex: 1,
    alignItems: 'center',
  },

  select_container_main: {
    flex: 2,
    justifyContent: 'space-around',
  },

  select_buttons: {
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: 'blue',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  select_button_text: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },

  //Search list page
  list_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  list_detail_image_size: {
    height: 100,
    width: 100,
  },

  list_change_text: {
    color: 'blue',
    fontSize: 15,
  },

  list_text: {
    fontSize: 15,
  },

  //Person Detail page
  person_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Person_detail_image_size: {
    height: 400,
    width: 300,
  },

  Person_list_change_text: {
    color: 'blue',
    fontSize: 15,
  },

  person_text: {
    fontSize: 15,
  },

  detail_image: {
    width: 100,
    height: 100,
  },

  //tab style
  tab_container: {
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-between',
  },

  tab_container2: {
    flex: 1,
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-between',
  },

  tab_boxes: {
    fontSize: 30,
  },
});
