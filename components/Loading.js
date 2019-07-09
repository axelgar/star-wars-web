'use strict';

function Loading(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

Loading.prototype.generate = function() {
  this.elements = '<p>May the force be with you...</p>';
  this.render();
}

Loading.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}