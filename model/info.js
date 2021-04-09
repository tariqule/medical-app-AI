import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const info = new Schema({
    bodyTemperature: {
        type: Number
    },
    heartRate: {
        type: Number
    },
    bloodTemperature: {
        type: Number
    },
    respiratoryRate: {
        type: Number
    },
    weight: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

mongoose.models = {};

const Info = mongoose.model('Info', info);

export default Info;