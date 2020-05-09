import {
  get_input,
  add_info,
  delete_item,
  edit_item,
  individual,
  get_input_address,
  person,
  delete_profile,
} from './constants';

export function Person() {
  return {
    type: person,
  };
}

export function Get_input_address(val) {
  return {
    type: get_input_address,
    val: val,
  };
}

export function Get_input(val) {
  return {
    type: get_input,
    val: val,
  };
}

export function Add_info(val) {
  return {
    type: add_info,
    val: val,
  };
}

export function Delete_item(val) {
  return {
    type: delete_item,
    val: val,
  };
}

export function Edit_item(val) {
  return {
    type: edit_item,
    val: val,
  };
}

export function Individual(val) {
  return {
    type: individual,
    val: val,
  };
}

export function Delete_profile() {
  return {
    type: delete_profile,
  };
}
