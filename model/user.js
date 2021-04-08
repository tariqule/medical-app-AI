import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const UserSchema = new Schema({
    
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ["nurse", "patient"]
    }
});

UserSchema.pre('save', function(next){
	//hash the password before saving it
	this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
	next();
});

mongoose.models = {};

const User = mongoose.model('User', UserSchema);

export default User;