var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
module.exports = {
	createQuestion: function(req, res){
		var question = new Question(req.body);
		question.save(function(err, question){
			if (err) {
				res.json(err);
			} else {
				res.sendStatus(200);
			}
		})
	},
	getQuestions: function(req, res){
		Question
			.find({})
			.exec(function(err, questions){
				res.json(questions);
			})
	},
	showQuestion: function(req, res){
		Question
			.findById(req.params.id)
			.populate("answers._author")
			.exec(function(err, question){
				res.json(question);
			})
	},
	createAnswer: function(req, res){
		Question
			.findById(req.body.questionId)
			.exec(function(err, question){
				question.answers.push(req.body);
				var numAnswers = question.answers.length - 1;
				question.save(function(err){
					if (err){
						res.json(err.errors[`answers.${numAnswers}.content`])
					} else {
						res.sendStatus(200);
					}
				})
			})
	},
	createLike: function(req, res){
		Question
			.findById(req.body.questionId)
			.exec(function(err, question){
				question.answers.id(req.body.answerId).likes++
				question.save(function(err){
					Question.update(
						{_id: req.body.questionId }, 
						{
							$push: {
								answers: {
									$each: [],
									$sort: {likes: -1}
								}
							}
						},
						function(err, question){
					})
					res.sendStatus(200);
				})
			})
	}
}