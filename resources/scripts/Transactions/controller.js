class Controller {
	constructor(Transactions) {
		console.log('Creating Transactions Controller');

		this.Transactions = Transactions;
	}

	refresh(){
		this.Transactions.refresh();
	}
}

Controller.$inject = ['Transactions'];

export default Controller;
