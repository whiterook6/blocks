class Blocks {
	constructor(Navigation, Wallets) {
		this.Navigation = Navigation;
		this.Wallets = Wallets;

		this.Wallets.refresh();
	}
}

Blocks.$inject = ['Navigation', 'Wallets'];

export default Blocks;
