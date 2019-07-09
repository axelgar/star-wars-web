'use strict';

function MoviesPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.movies = null;
  this.loading = null;
}

MoviesPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();

  await this.connectToAPI();
  this.elements = `
    <header>
      <h2>Welcome to the movies page</h2>
    </header>
    <section class="cards-container">
  `;
  this.movies.forEach((movie) => {
    this.elements += `
      <article>
        <h3>${movie.title}</h3>
        <p>${movie.release_date}</p>
        <p>${movie.director}</p>
        <p>${movie.opening_crawl}</p>
      </article>
    `;
  })
  this.elements += '</section>'
  this.render();
}

MoviesPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

MoviesPage.prototype.connectToAPI = async function() {
  this.movies = await starWarsServiceInstance.getAllMovies();
}