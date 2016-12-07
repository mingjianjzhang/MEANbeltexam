app.controller("QuestionsController", ['$scope', '$location', '$routeParams', 'SessionFactory', 'QuestionFactory', function($scope, $location, $routeParams, SessionFactory, QuestionFactory){

	SessionFactory.getCurrent(function(user){
		$scope.currentUser = user;
	})

	function fetchQuestions(){
		QuestionFactory.getQuestions(function(questions){
			$scope.questions = questions;
		})
	}

	function fetchQuestion(){
		QuestionFactory.getQuestion($routeParams.id, function(question){
			$scope.question = question;
		})
	}
	if($routeParams.id){
		fetchQuestion();
	} else {
		fetchQuestions();
	}

	$scope.submitQuestion = function(question){
		QuestionFactory.createQuestion(question, function(data){
			if(data.hasOwnProperty('errors')){
				$scope.questionErrs = data.errors.content.message;
			} else {
				$location.path('/dashboard');
			}

		})
	}
	$scope.createAnswer = function(answer){
		if (answer){
			answer._author = $scope.currentUser._id;
			answer.questionId = $scope.question._id;
			QuestionFactory.submitAnswer(answer, function(data){
				if(data.hasOwnProperty('message')){
					$scope.answerErrs = data.message;
				} 
				else {
					$location.path('/dashboard');
				}
			})
		} else {
			$scope.answerErrs = "You forgot to answer the question..."
		}
	}

	$scope.likeAnswer = function(questionId, answerId){
		QuestionFactory.createLike({questionId: questionId, answerId: answerId}, function(data){
			fetchQuestion();
		})
	}
	$scope.logout = function(){
		SessionFactory.logout(function(){
			$location.path('/');
		});
	}
}])