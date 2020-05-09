import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  //main page
  main_container: {
    backgroundColor: 'white',
  },

  main_lists_text: {
    fontSize: 30,
    alignSelf: 'center',
  },

  main_body_container: {
    flex: 1,
  },

  render_container_main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 3,
    borderColor: 'white',
  },

  render_container_main_del: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'gray',
    borderWidth: 3,
    borderColor: 'black',
  },

  //Create list page
  createlist_text: {
    alignSelf: 'center',
    fontSize: 20,
  },

  //Detailed page
  detail_container: {
    backgroundColor: 'white',
  },

  detail_lists_text: {
    fontSize: 30,
    alignSelf: 'center',
  },

  detail_body_container: {
    flex: 1,
  },

  render_container: {
    flex: 1,
  },

  render_container_detail: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 3,
    borderColor: 'white',
  },

  render_container_detail_done: {
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
  },

  render_container_detail_notdone: {
    color: 'black',
    fontSize: 25,
  },

  //Add item page
  Add_main: {
    flex: 1,
    justifyContent: 'space-around',
  },

  Add_button: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    justifyContent: 'center',
  },

  Add_text: {
    fontSize: 20,
  },
});
