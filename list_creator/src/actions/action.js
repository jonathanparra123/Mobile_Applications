//action types
import {
  get_info_list,
  get_item,
  delete_list,
  delete_item,
  detail_item,
} from './constants';

export function changeInputAdd(val) {
  return {
    type: get_item,
    val: val,
  };
}

export function getInfoList(icon, date, name) {
  return {
    type: get_info_list,
    icon: icon,
    date: date,
    name: name,
  };
}

export function delete_List(key) {
  return {
    type: delete_list,
    key: key,
  };
}

export function delete_Item(key) {
  return {
    type: delete_item,
    key: key,
  };
}

export function detail_Item(key) {
  return {
    type: detail_item,
    key: key,
  };
}
