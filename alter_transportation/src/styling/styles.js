import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  //Home Page
  home_main: {
    flex: 1,
  },

  home_header: {
    backgroundColor: '#ffecb3',
  },

  home_header_text: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'roboto',
  },

  home_buttons_container_1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0d47a1',
    justifyContent: 'space-around',
  },

  home_buttons_1: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#64b5f6',
    borderRadius: 15,
    width: 200,
    height: 100,
  },

  home_buttons_2: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#64b5f6',
    borderRadius: 50,
    width: 110,
    height: 110,
  },

  home_buttons_text: {
    fontWeight: 'bold',
    fontFamily: 'roboto',
    fontSize: 30,
  },

  home_buttons_container_2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0d47a1',
    justifyContent: 'space-around',
  },

  home_icons: {
    fontSize: 50,
  },

  home_question: {
    color: 'white',
    fontSize: 50,
  },

  //adding info page
  add_main: {
    flex: 1,
    backgroundColor: '#0d47a1',
  },

  add_info_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  add_button: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#64b5f6',
    borderRadius: 15,
    height: 50,
    width: 100,
  },

  done_button_container: {
    flex: 1,
    justifyContent: 'center',
  },

  done_button: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#64b5f6',
    borderRadius: 15,
    width: 200,
    height: 100,
  },

  add_done_button_text: {
    fontWeight: 'bold',
    fontFamily: 'roboto',
    fontSize: 20,
  },

  add_button_text: {
    fontWeight: 'bold',
    fontFamily: 'roboto',
    fontSize: 20,
  },

  add_input: {
    backgroundColor: 'white',
    borderRadius: 15,
  },

  add_input_container: {
    height: 50,
    width: 300,
  },

  add_text: {
    fontWeight: 'bold',
    fontFamily: 'roboto',
    color: '#ffecb3',
    fontSize: 25,
  },

  add_text_key: {
    color: '#ffecb3',
    fontSize: 15,
  },

  //List of trips page
  trips_main: {
    flex: 1,
  },

  trips_header: {
    backgroundColor: '#ffecb3',
  },

  trips_footer: {
    backgroundColor: '#ffecb3',
  },

  trips_header_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  trips_container_content: {
    backgroundColor: '#0d47a1',
  },

  trips_list_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },

  trips_text: {
    alignSelf: 'center',
    fontSize: 20,
  },

  trips_list_text: {
    fontSize: 18,
    alignSelf: 'center',
  },

  trips_list_text_nonblack: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#ffecb3',
  },

  trips_individual_button: {
    backgroundColor: '#4dd0e1',
    borderWidth: 1.5,
    borderColor: 'gray',
  },

  //detailed page
  detail_main: {
    flex: 1,
    backgroundColor: '#0d47a1',
  },

  detail_footer: {
    backgroundColor: '#ffecb3',
  },

  detail_list_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  detail_list_text: {
    fontSize: 30,
    color: '#ffecb3',
  },

  detail_footer_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  detail_button: {
    alignSelf: 'center',
  },

  detail_edit_container: {
    backgroundColor: '#0d47a1',
  },

  detail_edit_list_conatiner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  detail_edit_submit: {
    alignSelf: 'center',
  },

  detail_edit_text: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#ffecb3',
  },

  detail_edit_input: {
    backgroundColor: 'white',
    borderRadius: 15,
  },

  detail_edit_input_container: {
    height: 50,
    width: 200,
  },

  //Settings Page
  settings_container: {
    backgroundColor: '#0d47a1',
  },

  settings_main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  settings_main_add_button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  settings_input_container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    height: 50,
    width: 200,
    borderRadius: 15,
  },

  settings_add_profile_header: {
    backgroundColor: '#ffecb3',
  },

  settings_add_profile_header_text: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'roboto',
  },

  settings_add_profile_button: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#64b5f6',
    borderRadius: 15,
    width: 200,
    height: 100,
  },

  settings_add_profile_button_text: {
    fontWeight: 'bold',
    fontFamily: 'roboto',
    fontSize: 20,
  },

  settings_text: {
    alignSelf: 'center',
    color: '#ffecb3',
    fontSize: 20,
  },

  settings_submit_button: {
    alignSelf: 'center',
    backgroundColor: '#64b5f6',
    borderRadius: 15,
    height: 75,
    width: 100,
  },

  settings_submit_text: {
    alignSelf: 'center',
    fontSize: 15,
  },

  settings_info_main: {
    flex: 1,
    alignItems: 'center',
  },

  settings_info_main1: {
    flex: 1,
    height: 200,
    width: 300,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  settings_info_main2: {
    flex: 1,
    height: 300,
    width: 300,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  settings_info_text: {
    alignSelf: 'center',
    color: '#ffecb3',
    fontSize: 20,
  },

  //About page
  about_main: {
    flex: 1,
    backgroundColor: '#0d47a1',
    alignItems: 'center',
  },

  about_main1: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
  },

  about_text1: {
    color: '#ffecb3',
    fontSize: 15,
    fontFamily: 'roboto',
  },

  about_main2: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
  },

  about_text2: {
    color: '#ffecb3',
    fontSize: 15,
    fontFamily: 'roboto',
  },

  about_main3: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
  },

  about_text3: {
    color: '#ffecb3',
    fontSize: 15,
    fontFamily: 'roboto',
  },

  //Rewards Page
  rewards_main: {
    backgroundColor: '#0d47a1',
  },

  rewards_header: {
    backgroundColor: '#ffecb3',
  },

  rewards_header_text: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'roboto',
  },

  rewards_container: {
    flex: 1,
    backgroundColor: '#4dd0e1',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  rewards_text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontFamily: 'roboto',
  },

  rewards_icon: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
  },
});
