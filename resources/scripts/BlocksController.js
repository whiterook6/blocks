class Blocks {
	constructor($location) {
		this.$location = $location

		this.tabs = [{
			label: 'Balance',
			key: 'balance',
			click: () => {
				this.$location.path('/balances');
			}
		}, {
			label: 'Addresses',
			key: 'addresses',
			click: () => {}
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

		this.current_tab = this.tabs[0];
	}

	select_tab(tab){
		this.current_tab = tab;
		this.current_tab.click();
	}
}

Blocks.$inject = ['$location'];

export default Blocks;
