export class profile {
  constructor(key, name, address, goals) {
    this.key = key;
    this.name = name;
    this.address = address;
    this.goals = goals;
  }

  getKey() {
    return this.key;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  getGoals() {
    return this.goals;
  }
}
