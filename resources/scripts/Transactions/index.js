require('./style.scss');

import angular from 'angular';
import TransactionsController from './controller.js';

export default angular.module('blocks.transactions', [])
	.controller('TransactionsController', TransactionsController)
	.name;
