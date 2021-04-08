import connectDB from '../../middleware/mongodb';
import bcrypt from 'bcrypt';
import User from '../../model/user';

const handler = async (req, res) => {
    const saltRounds = 10;

    if (req.method === 'POST') {
        // Check if name, email or password is provided
        const { firstName, lastName, username, password, role } = req.body;
        if (firstName && lastName && username && password && role) {
            try {
                const user = new User({
                    firstName,
                    lastName,
                    username,
                    password,
                    role
                });
                // Create new user
                var usercreated = await user.save();
                console.log('user created');
                return res.status(200).send(usercreated);
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