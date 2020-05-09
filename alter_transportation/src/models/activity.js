export class activity {
  constructor(key, input, date, time, pic) {
    this.key = key;
    this.input = input;
    this.pic = pic;
    this.date = date;
    this.time = time;

    this.StartTimer();
  }

  getKey() {
    return this.key;
  }

  getInput() {
    return this.input;
  }

  getPic() {
    return this.pic;
  }

  getDate() {
    return this.date;
  }

  StartTimer() {
    if (this.time == null) {
      this.time = 0;
    }
    setInterval(() => {
      this.time += 1;
    }, 1000);
  }

  getTime() {
    return this.time;
  }
}
