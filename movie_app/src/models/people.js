export class Person {
  constructor(id, popular, image, name, city, bio, birth, death, credits) {
    this.id = id;
    this.name = name;
    this.birth = birth;
    this.death = death;
    this.city = city;
    this.bio = bio;
    this.credits = credits;
    this.popular = popular;
    this.image = 'http://image.tmdb.org/t/p/w185/' + image;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getBirth() {
    return this.birth;
  }

  getDeath() {
    return this.death;
  }

  getCity() {
    return this.city;
  }

  getBio() {
    return this.bio;
  }

  getCredits() {
    return this.credits;
  }

  getPopular() {
    return this.popular;
  }

  getImage() {
    return this.image;
  }
}
