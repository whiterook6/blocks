class Transactions {
	constructor() {
		this.transactions = [];
	}

	cached() {
		return this.transactions;
	}

	all(){
		return new Promise((resolve, reject) => {
			this.transactions = [{
				id: 1,
				tx_id: 'd8a11f689fc66518a8d29767958d625ecba5a2126191d6ba4b8f30acd8eb8896',
				block: 513081,
				input: 0.05443014,
				outputs: [0.05, 0.003584],
				fees: 0.00084614,
				timestamp: '2018-03-11 22:56:15',
				price_at_timestamp: {
					usd: 9595.90,
					cad: 12297.54
				}
			}, {
				id: 2,
				tx_id: 'c561a1e458f0b01eb10cb693b3e7ee9fa11fb404a9f1897a4c208029fb9908d8',
				block: 513081,
				input: 0.09645273,
				outputs: [0.01365258, 0.08276399],
				fees: 0.00003616,
				timestamp: '2018-03-11 22:56:15',
				price_at_timestamp: {
					usd: 9595.90,
					cad: 12297.54
				}
			}, {
				id: 2,
				tx_id: '50a709f62a0bb0adb19bf072ca03ff3665b8188ff96e7d46dfd41c4e8c6ecf90',
				block: 513081,
				input: 0.2688895,
				outputs: [0.00330172, 0.26556941],
				fees: 0.00001837,
				timestamp: '2018-03-11 22:56:15',
				price_at_timestamp: {
					usd: 9595.90,
					cad: 12297.54
				}
			}];

			resolve(this.transactions);
		});
	}
}

Transactions.$inject = [];

export default Transactions;
