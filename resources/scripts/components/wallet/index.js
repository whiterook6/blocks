import './style.scss';

let wallet = function(){
	return {
		scope: {
			data: '='
		},
		restrict: 'E',
		bindToController: true,
		controllerAs: 'ctrl',
		controller: WalletController,
		template: require('./template.html'),
	};
};

class WalletController {
	constructor(){
		this.name = 'A sample wallet';
		this.date_created = '2017-06-01';
		this.ticker = 'btc';
		this.cost = 300.00;
		this.value = 1200.00;
		this.increase = 100 * ((this.value - this.cost) / this.cost);
	}
}

WalletController.$inject = [];

export default wallet;
