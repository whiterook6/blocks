class NavigationService {
	constructor($location, wallets) {
		this.$location = $location;
		this.wallets = wallets;

		this.tabs = [{
			label: 'Balance',
			id: 'balances',
			click: () => {
				this.$location.path('/balances');
			}
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
}

NavigationService.$inject = ['$location'];

export default NavigationService;
