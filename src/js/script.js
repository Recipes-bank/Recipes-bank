var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Recipes = require('./component/recList');
//var Masonry = require('masonry-layout');

require('../css/style.scss');

var options = {
  recData: [
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://scontent-waw1-1.xx.fbcdn.net/t31.0-8/10517370_577894012322415_1370237679233357133_o.jpg'
    },
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
      imgURL: 'https://scontent-waw1-1.xx.fbcdn.net/t31.0-8/1040853_382249378553547_134354864_o.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/382292_335236516588167_651959006_n.jpg?oh=36726350a5769696c9319bad8c5ba760&oe=582E34DF'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://scontent-waw1-1.xx.fbcdn.net/t31.0-8/10828077_609861312459018_5108841642446272163_o.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/a9/bf/a5/a9bfa5b4981bcf23afa1c233d9f2aee4.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/42/87/4e/42874ee6fd64afdec4e0652f2d326164.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/df/07/b0/df07b073159d3ad8b3dced8e1b53ff9b.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/9d/68/73/9d68732158982718cb1cea9044b7d011.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/6d/5e/96/6d5e9695855483847358dfb5b1455cf5.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/cd/f3/4e/cdf34e77058c7da08a3553f0a47fe7f2.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/f3/97/cf/f397cfc5fe205130cb3033cb0580eab3.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/ff/96/cd/ff96cd1e137e97b9fe5bd69c915af61e.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/4a/0b/96/4a0b96d1242a92031c09c32ac92838e6.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'http://download.foodshot.co/Foodshot_2016_25_2.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://scontent-waw1-1.xx.fbcdn.net/t31.0-8/10557477_571770749601408_4517672948150601839_o.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/e9/d7/bc/e9d7bc1a6e56ec510e7d444753aee792.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/e9/78/2f/e9782fe4a91177d44030b1c7fdda7d3c.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/eb/0c/c6/eb0cc606bef5bb2af6811c5b0b7f41e9.jpg'
    },
    {
      title: 'Salomon hamburgero',
      description: 'Hamburgers are sold at fast-food restaurants, diners, and specialty and high-end restaurants (where burgers may sell for several times the cost of a fast-food burger). There are many international and regional variations of the hamburger.',
      price: '10',
      portion: '2',
      time: '15',
      dificult: '3',
      category: 'burgers',
      imgURL: 'https://s-media-cache-ak0.pinimg.com/564x/58/f9/8b/58f98bedb29c9b304ae7280b204b2df2.jpg'
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
