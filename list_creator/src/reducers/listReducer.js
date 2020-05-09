import {
  get_info_list,
  get_item,
  delete_list,
  detail_item,
} from '../actions/constants';
import {List} from '../model/models';
import {Listi} from '../model/modelsi';

//initial state
let initialState = {
  lists: [],
  current: '',
  list_items: [],
};

//makes random keys
function Makeid(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//controls action types and update state for redux
export default function(state = initialState, action) {
  var templist = [];
  var templisti = [];
  switch (action.type) {
    //action for adding new list
    case get_info_list:
      for (let i = 0; i < state.lists.length; i++) {
        templist[i] = state.lists[i];
      }

      let key = Makeid(5);

      templist.push(new List(action.name, action.icon, action.date, key));

      return {
        lists: templist,
      };
    //action for deleting list  
    case delete_list:
      for (let i = 0; i < state.lists.length; i++) {
        if (action.key === state.lists[i].getKey()) {
        } else {
          templist.push(state.lists[i]);
        }
      }

      return {
        lists: templist,
      };
    //action to look at items in list  
    case detail_item:
      for (var i = 0; i < state.lists.length; i++) {
        if (action.key === state.lists[i].getKey()) {
          templisti = state.lists[i].getItem();
        }
      }

      return {
        lists: state.lists,
        list_items: templisti,
        current: action.key,
      };
    //action for creatig items in a list  
    case get_item:
      let keyi = Makeid(5);

      for (var i = 0; i < state.lists.length; i++) {
        templist[i] = state.lists[i];
      }

      for (var j = 0; j < state.lists.length; j++) {
        if (state.lists[j].getKey() === state.current) {
          templisti = templist[j].getItem();

          templisti.push(new Listi(action.val, keyi));

          templist[j].setItem(templisti);

          templisti = templist[j].getItem();
        }
      }

      return {
        lists: templist,
        list_items: templisti,
        current: state.current,
      };

    default:
      return state;
  }
}
