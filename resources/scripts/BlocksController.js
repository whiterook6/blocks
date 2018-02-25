class Blocks {
	constructor($location) {
		this.$location = $location;

		this.tabs = [{
			label: 'Balance',
			key: 'balances',
			click: () => {
				this.$location.path('/balances');
			}
		}, {
			label: 'Transactions',
			key: 'transactions',
			click: () => {
				this.$location.path('/transactions');
			}
		}, {
			label: 'Settings',
			key: 'settings',
			click: () => {
				this.$location.path('/settings');
			}
		}];

		for (var i = this.tabs.length - 1; i >= 0; i--) {
			let tab = this.tabs[i];
			if ($location.path() == '/'+tab.key){
				this.current_tab = tab;
				break;
			}
		};
	}

	select_tab(tab){
		this.current_tab = tab;
		this.current_tab.click();
	}
}

Blocks.$inject = ['$location'];

export default Blocks;
