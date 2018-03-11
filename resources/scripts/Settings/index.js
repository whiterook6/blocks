require('./style.scss');

import angular from 'angular';
import SettingsController from './controller.js'

export default angular.module('blocks.settings', [])
	.controller('SettingsController', SettingsController)
	.name;
