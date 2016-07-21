var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Recipes = require('./component/recList');
//var Masonry = require('masonry-layout');

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
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/3d/45/8e/3d458ef17972ccc1cc3328205d561e5f.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/8a/1d/d0/8a1dd0ea6f9fdf877839846d6153e01d.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/05/09/ab/0509ab83bf5cccf336a80b07d2d38cd6.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/19/07/2d/19072d5b2913af59924b3fa64fbfd42c.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/19/07/2d/19072d5b2913af59924b3fa64fbfd42c.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/19/07/2d/19072d5b2913af59924b3fa64fbfd42c.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/19/07/2d/19072d5b2913af59924b3fa64fbfd42c.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/19/07/2d/19072d5b2913af59924b3fa64fbfd42c.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/19/07/2d/19072d5b2913af59924b3fa64fbfd42c.jpg'
    }
  ]};

var element = React.createElement(Recipes, options);
const app = document.getElementById('app');


ReactDOM.render(element, app);

//$('.grid').masonry({
//  // options
//  itemSelector: '.grid-item',
//  columnWidth: 400
//});


//var elem = document.querySelector('.grid');
//var msnry = new Masonry( elem, {
//  // options
//  itemSelector: '.grid-item',
//  columnWidth: 400
//});
//
//// element argument can be a selector string
////   for an individual element
//var msnry = new Masonry( '.grid', {
//  // options
//});
