'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements      = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <section class="landing-page">
      <header>
        <h1>Super cool Star Wars web site</h1>
        <h2>Here you can find the information to become the best fan of star wars</h2>
      </header>
    </section>
  `;
  
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}