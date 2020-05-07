import apiGenreService from './apiGenre.service';
import apiMovieService from './apiMovie.service';
import apiSpecificM from './apiSpecificM.service';
import apiCreditsService from './apiCredits.service';
import {MovieGenre} from '../models/movieGenre';
import {Movies} from '../models/movies';
import {Person} from '../models/people';

let MovieService = class MovieService {
  getMovies(val, genre, id) {
    if (val == 'movielist') {
      return new Promise((resolve, reject) => {
        fetch(apiMovieService.getapiLocation(genre))
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
    } else if (val == 'genre') {
      return new Promise((resolve, reject) => {
        fetch(apiGenreService.getapiLocation())
          .then(response => response.json())
          .then(responseJson => {
            let items = [];
            responseJson.genres.forEach(element => {
              items.push(new MovieGenre(element.name, element.id));
            });
            resolve(items);
          })
          .catch(error => {
            reject(error);
          });
      });
    } else if (val == 'movie') {
      return new Promise((resolve, reject) => {
        fetch(apiSpecificM.getapiLocation(id))
          .then(response => response.json())
          .then(responseJson => {
            let items = [];
            items.push(
              new Movies(
                responseJson.id,
                responseJson.original_title,
                responseJson.vote_average,
                responseJson.release_date,
                responseJson.overview,
                responseJson.poster_path,
                responseJson.status,
                responseJson.revenue,
                responseJson.budget,
                responseJson.genres,
              ),
            );
            resolve(items);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }

  getCast(val) {
    return new Promise((resolve, reject) => {
      fetch(apiCreditsService.getapiLocation(val))
        .then(response => response.json())
        .then(responseJson => {
          let items = [];
          for (let i = 0; i < 20; i++) {
            items.push(
              new Person(
                responseJson.cast[i].id,
                0,
                0,
                responseJson.cast[i].name,
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
};

const movieService = new MovieService();
export default movieService;
