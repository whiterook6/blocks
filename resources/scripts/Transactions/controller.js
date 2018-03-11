class Controller {
	constructor(Transactions, $timeout) {
		console.log('Creating Transactions Controller');

		$timeout(() => {
			this.data = [1,2,3,4,5,6,7,8,9];
		}, 1000);
		$timeout(() => {
			this.data = [10,21,31];
		}, 3000);
		$timeout(() => {
			this.data = [4,5,6,7,8];
		}, 5000);
		$timeout(() => {
			this.data = [];
		}, 6000);
	}
}

Controller.$inject = ['Transactions', '$timeout'];

export default Controller;
