var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Recipes = require('./component/recList');

require('../css/style.scss');

var options = {
  recData: [
    {
      title: 'Salomon hamburger',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: '../img/zolw.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'http://harzowski.h2g.pl/gallery/constantine.jpg'
    }
  ]};

var element = React.createElement(Recipes, options);
const app = document.getElementById('app');


ReactDOM.render(element, app);
