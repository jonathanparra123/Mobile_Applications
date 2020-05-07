export class MovieGenre {
  constructor(genre, id) {
    this.genre = genre;
    this.id = id;
  }

  getGenre() {
    return this.genre;
  }

  getId() {
    return this.id;
  }
}
