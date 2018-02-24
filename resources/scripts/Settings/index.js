require('./style.scss');

import angular from 'angular';
import SettingsController from './controller.js'
import SettingsService from './service.js'

export default angular.module('blocks.settings', [])
	.controller('SettingsController', SettingsController)
	.service('SettingsService', SettingsService)
	.name;
