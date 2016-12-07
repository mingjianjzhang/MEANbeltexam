var users = require('./../controllers/users.js');
var questions = require("./../controllers/questions.js")
module.exports = function(app){

	// *** USERS ROUTES *****
	app.post('/login', users.login);
	app.post('/users', users.register)
	app.get('/currentUser', users.getCurrent);
	app.delete('/logout', users.logout);

	//*** QUESTION ROUTES
		// Get
	app.get('/questions', questions.getQuestions);
	app.get('/question/:id', questions.showQuestion);
		// Post
	app.post('/questions', questions.createQuestion);
	app.post('/answers', questions.createAnswer);
	app.post('/likes', questions.createLike);
}
 
function userAuth(req, res, next){
	if (req.session.user) {
		next();
	} else {
		res.sendStatus(401);
	}
}