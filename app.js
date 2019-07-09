'use strict';

function main(){
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var navbarInstance = null;
  var rootElement = document.querySelector('#root');
  var links = [
    {name: 'Home',
    url: '/'},
    {name: 'Movies',
    url: '/movies'}
  ];

  generateLayout();
  generateNavbar();
  addListenersToNavbar();
  activateRouter();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }

  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header, links)
    navbarInstance.generate();
  }

  function activateRouter() {
    routerInstance.buildDom(ENTRY_POINT, layoutInstance.main)
  }

  function addListenersToNavbar() {
    var anchors = document.querySelectorAll('nav a');
    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', changePage);
    })
  }

  function changePage(event) {
    var url = event.target.attributes.url.value;
    routerInstance.buildDom(url, layoutInstance.main);
  }
};

window.addEventListener('load', main);