app.factory("SessionFactory", ["$http", "$location", function($http, $location){
	var factory = {};
	factory.register = function(user, callback){
		$http.post('/users', user).then(function(res){
			callback(res.data);
		})
	}
	factory.login = function(creds, callback){
		$http.post('/login', creds).then(function(res){
			callback(res.data);
		})
	}
	factory.getCurrent = function(callback){
		$http.get('/currentUser').then(function(data){
			callback(data.data);
		})
	}
	factory.logout = function(callback){
		$http.delete('/logout').then(function(res){
			callback();
		});
	}
	return factory;
}])