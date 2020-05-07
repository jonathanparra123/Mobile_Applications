export class Movies {
  constructor(
    id,
    title,
    rating,
    release,
    summary,
    poster,
    status,
    revenue,
    budget,
    genres,
  ) {
    this.id = id;
    this.title = title;
    this.rating = rating;
    this.release = release;
    this.summary = summary;
    this.poster = 'http://image.tmdb.org/t/p/w185/' + poster;
    this.status = status;
    this.revenue = revenue;
    this.budget = budget;
    this.genres = genres;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getRating() {
    return this.rating;
  }

  getRelease() {
    return this.release;
  }

  getSummary() {
    return this.summary;
  }

  getPoster() {
    return this.poster;
  }

  getBudget() {
    return this.budget;
  }

  getRevenue() {
    return this.revenue;
  }

  getGenres() {
    return this.genres;
  }

  getStatus() {
    return this.status;
  }
}
