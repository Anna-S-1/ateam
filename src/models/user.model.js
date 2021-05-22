const mongoose = require('mongoose');
passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
first_name: {
    type: String
   },
last_name: {
    type: String
    
   },
profile_Picture: {
    type: String
   },
userType: {
    type: String,
    default: 'admin',
    enum: ["admin", "manager"]
   },
 email: {
  type: String,
  required: true,
  trim: true
 },
 password: {
  type: String,
  required: true
 },
 accessToken: {
  type: String
 }
});
UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('user', UserSchema);
 
module.exports = User;
