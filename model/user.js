import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const user = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
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

mongoose.models = {};

const User = mongoose.model('User', user);

export default User;