//class for a list
export class List {
  constructor(name, icon, date, key) {
    this.name = name;
    this.icon = icon;
    this.date = date;
    this.item = [];
    this.key = key;
  }

  getName() {
    return this.name;
  }

  getIcon() {
    return this.icon;
  }

  getDate() {
    return this.date;
  }

  getItem() {
    return this.item;
  }

  getKey() {
    return this.key;
  }

  setItem(val) {
    this.item = val;
  }
}
