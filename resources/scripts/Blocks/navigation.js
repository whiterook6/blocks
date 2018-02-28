class NavigationService {
	constructor($location) {
		this.$location = $location;

		this.tabs = [{
			label: 'Balance',
			id: 'balances',
			click: () => {
				this.$location.path('/balances');
			}
		}, {
			label: 'Transactions',
			id: 'transactions',
			click: () => {
				this.$location.path('/transactions');
			}
		}, {
			label: 'Settings',
			id: 'settings',
			click: () => {
				this.$location.path('/settings');
			}
		}];

		this.menu = [{
			label: 'Overview',
			children: [{
				label: 'My Balances',
				id: 'overview_balances',
				click: () => {
					this.$location.path('/balances');
				}
			}]
		}, {
			label: 'Wallets',
			children: [{
				label: 'Bitcoin',
				id: 'wallets_bitcoin',
				click: () => {
					this.$location.path('/btc/balances');
				}
			}, {
				label: 'Ethereum',
				id: 'wallets_ethereum',
				click: () => {
					this.$location.path('/eth/balances');
				}
			}, {
				label: 'Add...',
				id: 'wallets_add',
				click: () => {
					this.$location.path('/wallets/add');
				}
			}]
		}];
	}

	select_tab(tab){
		if (!this.current_tab || this.current_tab.id != tab.id){
			if (tab.click){
				this.current_tab = tab;
				this.current_tab.click();
			}
		}
	}

	select_menu(menu){
		if (!this.current_menu || this.current_menu.id != menu.id){
			if (menu.click){
				this.current_menu = menu;
				this.current_menu.click();
			}
		}
	}
}

NavigationService.$inject = ['$location'];

export default NavigationService;
