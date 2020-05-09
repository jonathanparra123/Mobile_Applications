export class rewards {
  constructor(key, total, active, pub) {
    this.key = key;
    this.total = total;
    this.active = active;
    this.public = pub;
  }

  Getactive() {
    return this.active;
  }

  Gettotal() {
    return this.total;
  }

  Getpublic() {
    return this.public;
  }
}
