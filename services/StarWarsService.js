'use strict';

function StarWarsService() {
  this.baseUrl = 'https://swapi.co/api/'
}

StarWarsService.prototype.getAllMovies = async function() {
  var response = await fetch(`${this.baseUrl}films`);
  var data = await response.json();
  return data.results;
}

var starWarsServiceInstance = new StarWarsService();