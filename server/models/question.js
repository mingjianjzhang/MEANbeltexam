var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var QuestionSchema = new Schema({
	content: {type: String, required: [true, "You forgot to ask a question..."], minlength: [10, "Your question must be at least 10 characters long"]},
	description: {type: String },
	answers: [
		{ 
			_author: {type: Schema.Types.ObjectId, ref: 'User'},
			content: {type: String, required: [true, "You forgot to answer the question..."],minlength: [15, "Your answer must be at least 15 characters long"]},
			details: {type: String},
			likes: {type: Number, default: 0}
		}
	 
	]
})
mongoose.model("Question", QuestionSchema);