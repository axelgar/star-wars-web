'use strict';

function Footer(parentElement) {
  this.parentElement = parentElement;
  this.elements      = null;
}

Footer.prototype.generate = function() {
  this.elements = `
    <ul>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Linkedin</a></li>
      <li><a href="#">Twiter</a></li>
    </ul>
  `;

  this.render();
}

Footer.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}