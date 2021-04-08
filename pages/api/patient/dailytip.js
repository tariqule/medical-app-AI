import connectDB from '../../../middleware/mongodb';
import DailyTip from '../../../model/dailytip';

// get all daily tips posted by nurses
const handler = async (req, res) => {
    const saltRounds = 10;
    const nurseId = req.user;

    if (req.method === 'GET') {
        DailyTip.find({ }, function (err, tips) {
            res.status(200).send(tips);
        });
    }
    else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);