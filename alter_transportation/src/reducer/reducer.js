import {activity} from '../models/activity';
import {profile} from '../models/person';
import {rewards} from '../models/rewards';
import {
  add_info,
  get_input,
  delete_item,
  edit_item,
  individual,
  person,
  get_input_address,
  delete_profile,
} from '../actions/constants';

let initialState = {
  input: '',
  list_of_trips: [],
  individual_activity: [],

  input_address: '',
  person_list: [],
  added_profile: false,

  goals: [],

  trip_count: 0,
};

export default function(state = initialState, action) {
  //window.alert(JSON.stringify(state))
  var temp_list = [];
  var count = 0;
  var temp_individual = [];
  var temp_profile = [];
  var temp_goals = [];
  var pub = 0;
  var active = 0;
  var total = 0;

  switch (action.type) {
    case get_input:
      return {
        input: action.val,
        list_of_trips: state.list_of_trips,
        individual_activity: state.individual_activity,
        input_address: state.input_address,
        added_profile: state.added_profile,
        person_list: state.person_list,
        goals: state.goals,
        trip_count: state.trip_count,
      };

    case add_info:
      if (state.list_of_trips == null) {
        temp_list.push(new activity('A' + 0, state.input, action.val));

        return {
          list_of_trips: temp_list,
          person_list: state.person_list,
          goals: state.goals,
          added_profile: state.added_profile,
          trip_count: state.trip_count,
        };
      } else {
        for (let i = 0; i < state.list_of_trips.length; i++) {
          temp_list.push(
            new activity(
              state.list_of_trips[i].key,
              state.list_of_trips[i].input,
              state.list_of_trips[i].date,
              state.list_of_trips[i].time,
            ),
          );
          count++;
        }

        temp_list.push(new activity('A' + count, state.input, action.val));

        for (let i = 0; i < temp_list.length; i++) {
          let word = '';
          for (let j = 0; j < temp_list[i].input.length; j++) {
            if (
              temp_list[i].input[j + 1] == null ||
              temp_list[i].input[j + 1] == ' '
            ) {
              word = '';
            } else {
              word += temp_list[i].input[j];

              if (word == 'activ') {
                active++;
              } else if (word == 'publi') {
                pub++;
              }
            }
          }
          total++;
        }

        temp_goals.push(new rewards('A' + 0, total, active, pub));

        return {
          list_of_trips: temp_list,
          person_list: state.person_list,
          goals: temp_goals,
          added_profile: state.added_profile,
          trip_count: active,
        };
      }

    case delete_item:
      for (let i = 0; i < state.list_of_trips.length; i++) {
        temp_list.push(
          new activity(
            state.list_of_trips[i].key,
            state.list_of_trips[i].input,
            state.list_of_trips[i].date,
            state.list_of_trips[i].time,
          ),
        );
      }

      for (let j = 0; j < temp_list.length; j++) {
        if (temp_list[j].key == action.val) {
          temp_list.splice(j, 1);
        }
      }

      return {
        list_of_trips: temp_list,
        person_list: state.person_list,
        goals: state.goals,
        added_profile: state.added_profile,
        trip_count: state.trip_count,
      };

    case edit_item:
      for (let i = 0; i < state.list_of_trips.length; i++) {
        temp_list.push(
          new activity(
            state.list_of_trips[i].key,
            state.list_of_trips[i].input,
            state.list_of_trips[i].date,
            state.list_of_trips[i].time,
          ),
        );
      }

      for (let j = 0; j < temp_list.length; j++) {
        if (temp_list[j].key == action.val) {
          temp_list[j].input = state.input;
        }
      }

      for (let i = 0; i < temp_list.length; i++) {
        if (temp_list[i].key == action.val) {
          temp_individual.push(
            new activity(
              temp_list[i].key,
              temp_list[i].input,
              temp_list[i].date,
              temp_list[i].time,
            ),
          );
        }
      }

      return {
        list_of_trips: temp_list,
        individual_activity: temp_individual,
        person_list: state.person_list,
        goals: state.goals,
        added_profile: state.added_profile,
        trip_count: state.trip_count,
      };

    case individual:
      for (let i = 0; i < state.list_of_trips.length; i++) {
        if (state.list_of_trips[i].key == action.val) {
          temp_individual.push(
            new activity(
              state.list_of_trips[i].key,
              state.list_of_trips[i].input,
              state.list_of_trips[i].date,
              state.list_of_trips[i].time,
            ),
          );
        }
      }

      return {
        list_of_trips: state.list_of_trips,
        individual_activity: temp_individual,
        person_list: state.person_list,
        goals: state.goals,
        added_profile: state.added_profile,
        trip_count: state.trip_count,
      };

    case get_input_address:
      return {
        input: state.input,
        list_of_trips: state.list_of_trips,
        individual_activity: state.individual_activity,
        input_address: action.val,
        added_profile: state.added_profile,
        goals: state.goals,
        trip_count: state.trip_count,
      };

    case person:
      if (state.person_list == null) {
        temp_profile.push(
          new profile('B' + 0, state.input, state.input_address),
        );

        temp_goals.push(new rewards('B' + 0, 0, 0, 0));

        return {
          person_list: temp_profile,
          added_profile: true,
          list_of_trips: state.list_of_trips,
          individual_activity: state.individual_activity,
          goals: temp_goals,
          trip_count: state.trip_count,
        };
      } else {
        return {
          person_list: state.person_list,
          added_profile: true,
          list_of_trips: state.list_of_trips,
          individual_activity: state.individual_activity,
          goals: state.goals,
          trip_count: state.trip_count,
        };
      }

    case delete_profile:
      return {
        added_profile: false,
        list_of_trips: state.list_of_trips,
        individual_activity: state.individual_activity,
        trip_count: state.trip_count,
      };

    default:
      return state;
  }
}
