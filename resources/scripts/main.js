require('../../node_modules/bulma/css/bulma.css');
require('../styles/app.scss');

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';

import Routes from './Routes';
import BlocksController from './BlocksController'
import reload_optional from './Utilities/reload_optional';

import Services from './services/'
import Blocks from './blocks/'
import Balances from './balances/';
import Settings from './settings/';
import Transactions from './transactions/';

angular
	.module('blocks', [
		ngAnimate,
		ngResource,
		ngRoute,

		Services,
		Blocks,
		Balances,
		Settings,
		Transactions,
	])
	.config(Routes)
	.controller('BlocksController', BlocksController)
	.run(reload_optional);