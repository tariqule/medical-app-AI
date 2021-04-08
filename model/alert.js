import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const alert = new Schema({
    alertType: {
        type: String
    },
    alertDescription: {
        type: String
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

mongoose.models = {};

const Alert = mongoose.model('Alert', alert);

export default Alert;