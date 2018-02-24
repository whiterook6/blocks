require('./style.scss');

import angular from 'angular';
import BalancesController from './controller.js'
import BalancesService from './service.js'

export default angular.module('blocks.balances', [])
	.controller('BalancesController', BalancesController)
	.service('BalancesService', BalancesService)
	.name;
