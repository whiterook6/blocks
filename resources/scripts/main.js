require('../../node_modules/bulma/css/bulma.css');
require('../styles/app.scss');

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';

import BlocksController from './BlocksController';
import Routes from './Routes';
import reload_optional from './Utilities/reload_optional';

import Balances from './Balances/';
import Settings from './Settings/';
import Transactions from './Transactions/';

import StaggeredList from './Components/StaggeredList/'

angular
	.module('blocks', [
		ngAnimate,
		ngResource,
		ngRoute,

		Balances,
		Settings,
		Transactions,
	])
	.directive('staggeredList', StaggeredList)
	.config(Routes)
	.controller('BlocksController', BlocksController)
	// .run(reload_optional);