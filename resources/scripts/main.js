require('../../node_modules/bulma/css/bulma.css');
require('../styles/app.scss');

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';

import Services from './services/';
import Components from './components/';

import Routes from './Routes';
import BlocksController from './BlocksController';
import reload_optional from './Utilities/reload_optional';


angular
	.module('blocks', [
		ngAnimate,
		ngResource,
		ngRoute,

		Services,
		Components,
	])
	.config(Routes)
	.controller('BlocksController', BlocksController)
	.run(reload_optional);