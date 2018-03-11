import angular from 'angular';
import Wallets from './wallets.js';
import Transactions from './transactions.js';
import Settings from './settings.js';

export default angular.module('blocks.services', [])
	.service('Wallets', Wallets)
	.service('Transactions', Transactions)
	.service('Settings', Settings)
	.name;
