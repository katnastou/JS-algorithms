var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

//passport-local-mongoose has built-in methods to serialize and deserialize user
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
