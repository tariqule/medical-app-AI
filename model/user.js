import mongoose, { isValidObjectId } from 'mongoose';
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const UserSchema = new Schema({
    
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["nurse", "patient"]
    },
    info: [{
        type: Schema.Types.ObjectId,
        ref: 'Info'
    }]
});

UserSchema.pre('save', function(next){
	//hash the password before saving it
	this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
	next();
});

UserSchema.methods.authenticate = function(password) {
	return this.password === bcrypt.hashSync(password, SALT_ROUNDS);
};

UserSchema.virtual('fullName')
    .get(function() {
        return this.firstName + ' ' + this.lastName;
    })

mongoose.models = {};

const User = mongoose.model('User', UserSchema);

export default User;