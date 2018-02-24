require('./style.scss');

import angular from 'angular';
import TransactionsController from './controller.js'
import TransactionsService from './service.js'

export default angular.module('blocks.transactions', [])
	.controller('TransactionsController', TransactionsController)
	.service('Transactions', TransactionsService)
	.name;
