let StaggeredList = function() {
	return {
		scope: {
			source: '=items',
			delay: '=?delay'
		},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: StaggeredListController,
		template: require('./template.html'),
	};
};

class StaggeredListController {
	constructor($interval, $scope) {
		console.log('Create StaggeredListController');
		console.log('source: '+JSON.stringify(this.source));
		this.$interval = $interval;
		this.$scope = $scope;
		this.staggered_items = [];
		this.interval_promise = null;

		if (!this.delay){
			this.delay = 50; // 50 ms
		}

		// on data change, begin staggering. Stop old stagger and start if the new collection
		// isn't empty.
		this.$scope.$watchCollection('this.source', (new_collection, old_collection)=> {
			console.log('Watch Collection');
			this.stop_stagger();
			this.staggered_items = [];
			
			if (new_collection && new_collection.length){
				this.start_stagger();
			}
		});

		// Make sure that the interval is destroyed too
		this.$scope.$on('$destroy', function() {
			this.stop_stagger();
		});
	}

	// If the interval exists, stop it, then set it to null.
	stop_stagger(){
		if (this.interval_promise){
			console.log('Stopping stagger');
			this.interval_promise.cancel();
		}

		this.interval_promise = null;
	}

	// creates an interval that will build a destination array one at a time until the source is used up.
	// the source is not modified. Will not start another interval if one is running.
	start_stagger(){
		if (!this.interval_promise){
			console.log('Starting stagger');
			this.interval_promise = this.$interval(this.stagger, this.delay);
		}
	}

	// Move a single item from the source into the destination array. If the lengths match (if there is nothing
	// left to copy), stop the interval.
	stagger(){
		if (this.staggered_items.length < this.source.length){
			console.log('Copying...')
			this.staggered_items.push(this.source[this.staggered_items.length]);
		}

		if (this.staggered_items.length >= this.source.length){
			console.log('Done.')
			this.stop_stagger();
		}
	}
}

StaggeredListController.$inject = ['$interval', '$scope'];

export default StaggeredList;
