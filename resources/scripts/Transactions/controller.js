class Controller {
	constructor(Transactions) {
		console.log('Creating Transactions Controller');

		this.data = [1,2,3,4,5,6,7,8,9,10];
	}
}

Controller.$inject = ['Transactions'];

export default Controller;
