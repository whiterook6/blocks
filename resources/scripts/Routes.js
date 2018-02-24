let Routes = function($routeProvider) {
	$routeProvider.when('/', {
		template: require('./Balances/template.html'),
		controller: 'BalancesController',
		controllerAs: 'ctrl',
	}).when('/balances', {
		template: require('./Balances/template.html'),
		controller: 'BalancesController',
		controllerAs: 'ctrl',
	}).when('/settings', {
		template: require('./Settings/template.html'),
		controller: 'SettingsController',
		controllerAs: 'ctrl',
	}).when('/transactions', {
		template: require('./Transactions/template.html'),
		controller: 'TransactionsController',
		controllerAs: 'ctrl',
	});
};

Routes.$inject = ['$routeProvider'];

export default Routes;
