'use strict';

function Card(movie) {
  this.movie = movie;
}

Card.prototype.generate = function() {
  return `
  <article>
    <h3>${this.movie.title}</h3>
    <p>${this.movie.release_date}</p>
    <p>${this.movie.director}</p>
    <p>${this.movie.opening_crawl}</p>
  </article>
`;
}