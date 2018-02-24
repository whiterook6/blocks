require('../../node_modules/bulma/css/bulma.css')
require('../styles/app.scss');

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';

angular
	.module('blocks', [
		ngAnimate,
		ngResource,
		ngRoute
	]);