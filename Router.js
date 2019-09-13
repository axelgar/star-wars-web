'use strict';

function Router() {
  this.page = null;
}

Router.prototype.buildDom = function(url, parentElement) {
  switch (url) {
    case '/':
      this.generatePage(parentElement, LandingPage);
      break;
    case '/movies':
      this.generatePage(parentElement, MoviesPage);
      break;
    default:
      this.generatePage(parentElement, LandingPage);
  }
}

Router.prototype.generatePage = function(parentElement, Page) {
  this.page = new Page(parentElement);
  this.page.generate();
}

var routerInstance = new Router();
