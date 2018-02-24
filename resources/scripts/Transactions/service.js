class Service {
	constructor($timeout) {
		this.data = [1];
		this.$timeout = $timeout;
	}

	refresh(){
		function fake_data(limit = 5){
			let data = [];
			for (var i = 0; i < limit; i++) {
				data.push(Math.floor(Math.random() * (1000)));
			}

			return data;
		}

		return new Promise((resolve, reject) => {
			this.$timeout(() => {
				this.data = fake_data(10);
				resolve(this.data);
			}, Math.floor(Math.random() * (1000)));
		});
	}
}

Service.$inject = ['$timeout'];

export default Service;
