import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dailytip = new Schema({
    tipName: {
        type: String
    },
    tipDescription: {
        type: String
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

mongoose.models = {};

const DailyTip = mongoose.model('User', dailytip);

export default DailyTip;