app.controller("SessionsController", ['$scope', '$location', 'SessionFactory', function($scope, $location, SessionFactory){

	$scope.loginUser = function(creds){
		SessionFactory.login(creds, function(data){
			if (data.hasOwnProperty('errors')) {
				$scope.loginErrors = data.errors
			} else {
				$location.path('/dashboard')
			}
		})
	}
	$scope.registerUser = function(user){
		SessionFactory.register(user, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.regErrors = data.errors
			} else if (data.hasOwnProperty("badPassword")){
				$scope.regErrors = data.badPassword
			} else {
				$location.path('/dashboard')
			}
		})
	}
	$scope.logout = function(){
		SessionFactory.logout(function(){
			$location.path('/');
		});
	}

}])