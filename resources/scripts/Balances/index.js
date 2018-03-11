require('./style.scss');

import angular from 'angular';
import BalancesController from './controller.js'

export default angular.module('blocks.balances', [])
	.controller('BalancesController', BalancesController)
	.name;
