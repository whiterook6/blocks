class Wallets {
	constructor() {
		this.data = [];
	}

	refresh(){
		return new Promise((resolve, reject) => {
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
		});
	}
}

Wallets.$inject = [];

export default Wallets;
