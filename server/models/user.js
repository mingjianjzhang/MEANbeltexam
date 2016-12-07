var mongoose = require('mongoose'),
Schema = mongoose.Schema;
console.log("will this show");
var match = [	
/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, "Invalid email address"]
var UserSchema = new mongoose.Schema({
	name: {type: String, required:[true, "You must provide a name"], minlength: [2, "Your name is too short to be a name"] },
	email: {type: String, required:[true, "You must provide an email address"], match: match},
	password: {type: String, required:[true, "You must provide a password"], minlength: [8, "Your password must be at least 8 characters"]},
})
mongoose.model("User", UserSchema);