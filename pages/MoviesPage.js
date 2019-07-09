'use strict';

function MoviesPage(parentElement) {
  this.parentElement = parentElement;
  this.elements      = null;
  this.movies        = null;
  this.loading       = null;
}

MoviesPage.prototype.generate = async function() {
  this.generateLoading();

  await this.connectToAPI();
  this.elements = `
    <header>
      <h2>Welcome to the movies page</h2>
    </header>
    <section class="cards-container">
  `;
  this.movies.forEach((movie) => {
    var movieCard = new Card(movie);
    this.elements += movieCard.generate();
  })
  this.elements += '</section>';

  this.render();
}

MoviesPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

MoviesPage.prototype.connectToAPI = async function() {
  this.movies = await starWarsServiceInstance.getAllMovies();
}

MoviesPage.prototype.generateLoading = function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
}