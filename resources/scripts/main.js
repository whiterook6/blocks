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

angular
	.module('blocks', [
		Balances,
		Settings,
		Transactions,

		ngAnimate,
		ngResource,
		ngRoute
	])
	.config(Routes)
	.controller('BlocksController', BlocksController)
	// .run(reload_optional);