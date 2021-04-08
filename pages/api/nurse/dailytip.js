import connectDB from '../../../middleware/mongodb';
import bcrypt from 'bcrypt';
import DailyTip from '../../../model/dailytip';

const handler = async (req, res) => {
    const saltRounds = 10;
    const nurseId = req.user;

    if (req.method === 'POST') {
        const { tipName, tipDescription } = req.body;
        if ( tipName && tipDescription) {
            try {
                const tip = new DailyTip({
                    tipName: tipName,
                    tipDescription: tipDescription,
                    user: nurseId
                });
                // Create new user
                const tipCreated = await tip.save();
                console.log('tip created');
                return res.status(200).send(tipCreated);
            } catch (error) {
                console.log('error occured');
                return res.status(500).send(error.message);
            }
        } else {
            res.status(422).send('data_incomplete');
        }
    }
    else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);