var app = angular.module('app', ['ngRoute']);

//ROUTES
app.config(function($routeProvider, $httpProvider){
	$routeProvider
		.when("/", {
			templateUrl: "./partials/loginreg.html",
			controller: "SessionsController"
		})
		.when("/dashboard", {
			templateUrl: "./partials/dashboard.html",
			controller: "QuestionsController"
		})
		.when("/new_question", {
			templateUrl: "./partials/newQuestion.html",
			controller: "QuestionsController"
		})
		.when("/question/:id", {
			templateUrl: "./partials/showQuestion.html",
			controller: "QuestionsController"
		})
		.when("/question/:id/new_answer", {
			templateUrl: "./partials/newAnswer.html",
			controller: "QuestionsController"
		})




//  Interceptor 
// $httpProvider.interceptors.push('loginInterceptor');

})

