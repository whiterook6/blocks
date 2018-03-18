import angular from 'angular';

import wallet from './wallet'

export default angular.module('blocks.components', [])
	.directive('wallet', wallet)
	.name;
