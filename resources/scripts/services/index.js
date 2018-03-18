import angular from 'angular';
import Wallets from './wallets.js';
import Navigation from './navigation.js';

export default angular.module('blocks.services', [])
	.service('Wallets', Wallets)
	.service('Navigation', Navigation)
	.name;
