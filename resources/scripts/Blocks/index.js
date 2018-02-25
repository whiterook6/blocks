import angular from 'angular';

import NavigationService from './navigation.js';

export default angular.module('blocks.blocks', [])
	.service('Navigation', NavigationService)
	.name;
