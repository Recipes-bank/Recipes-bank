var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Button = require('./component/button');

require('../css/style.scss');

var options = {
  title: 'Eat up',
};

var element = React.createElement(Button, options);
const app = document.getElementById('app');

ReactDOM.render(element, app);
