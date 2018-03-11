class Wallets {
	constructor($timeout) {
		this.$timeout = $timeout;
		this.data = [];
		this.outstanding_requests = 0;
	}

	refresh(){
		this.outstanding_requests++;
		return new Promise((resolve, reject) => {
			this.$timeout(() => {
				this.outstanding_requests--;
				this.data = [{
					id: 1,
					name: 'Bitcoin',
					source: 'Coinomi',
					current_balance: 0.3417,
					current_value: {
						usd: 4134.77,
						cad: 5296.91
					},
				}, {
					id: 2,
					name: 'Ethereum',
					source: 'Coinomi',
					current_balance: 1.6501,
					current_value: {
						usd: 1197.99,
						cad: 1534.70
					},
				}];

				resolve(this.data);
			}, 1000);
		});
	}
}

Wallets.$inject = ['$timeout'];

export default Wallets;
