app.factory("QuestionFactory", ["$http", function($http){
	var factory = {};
	factory.createQuestion = function(question, callback){
		$http.post("/questions", question).then(function(res){
			callback(res.data);
		})
	}
	factory.getQuestions = function(callback){
		console.log("about to get questions from factory");
		$http.get("/questions").then(function(res){
			callback(res.data);
		})
	}
	factory.getQuestion = function(questionId, callback){
		$http.get(`/question/${questionId}`).then(function(data){
			callback(data.data);
		})
	}
	factory.submitAnswer = function(answer, callback){
		$http.post("/answers", answer).then(function(res){
			callback(res.data);
		})
	}
	factory.createLike = function(ids, callback){
		$http.post("/likes", ids).then(function(res){
			callback(res.data);
		})
	}
	return factory;
}])