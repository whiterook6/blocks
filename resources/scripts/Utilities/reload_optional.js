// http://joelsaupe.com/programming/angularjs-change-path-without-reloading/
let reload_optional = function ($route, $rootScope, $location) {
	var _path = $location.path;

	$location.path = function (path, reload) {
		if (reload === false) {
			var lastRoute = $route.current;
			var un = $rootScope.$on('$locationChangeSuccess', function () {
				$route.current = lastRoute;
				un();
			});
		}
		return _path.apply($location, [path]);
	};
};

reload_optional.$inject = ['$route', '$rootScope', '$location'];

export default reload_optional;
