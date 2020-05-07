import apiPersonService from './apiPeople.service';
import apiSpecificP from './apiSpecificP.service';
import apiSearchMovieService from './apiSearchMovie.service';
import {Movies} from '../models/movies';
import {Person} from '../models/people';
import apiMovieCreditService from './apiMovieCredit.service';

let SearchService = class SearchService {
  getPerson(name) {
    return new Promise((resolve, reject) => {
      fetch(apiPersonService.getapiLocation(name))
        .then(response => response.json())
        .then(responseJson => {
          let items = [];
          responseJson.results.forEach(element => {
            items.push(
              new Person(
                element.id,
                element.popularity,
                element.profile_path,
                element.name,
              ),
            );
          });
          resolve(items);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getMovieForP(movie) {
    return new Promise((resolve, reject) => {
      fetch(apiMovieCreditService.getapiLocation(movie))
        .then(response => response.json())
        .then(responseJson => {
          let items = [];
          for (let i = 0; i < 20; i++) {
            items.push(
              new Movies(
                responseJson.cast[i].id,
                responseJson.cast[i].original_title,
                0,
                responseJson.cast[i].release_date,
                0,
                responseJson.cast[i].poster_path,
              ),
            );
          }
          resolve(items);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getPersonDetail(name) {
    return new Promise((resolve, reject) => {
      fetch(apiSpecificP.getapiLocation(name))
        .then(response => response.json())
        .then(responseJson => {
          let items = [];
          items.push(
            new Person(
              responseJson.id,
              responseJson.popularity,
              responseJson.profile_path,
              responseJson.name,
              responseJson.place_of_birth,
              responseJson.biography,
              responseJson.birthday,
              responseJson.deathday,
            ),
          );
          resolve(items);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getMovieDetail(name) {
    return new Promise((resolve, reject) => {
      fetch(apiSearchMovieService.getapiLocation(name))
        .then(response => response.json())
        .then(responseJson => {
          let items = [];
          responseJson.results.forEach(element => {
            items.push(
              new Movies(
                element.id,
                element.original_title,
                element.vote_average,
                element.release_date,
                element.overview,
                element.poster_path,
              ),
            );
          });
          resolve(items);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

const searchService = new SearchService();
export default searchService;
