import connectDB from '../../middleware/mongodb';
import bcrypt from 'bcrypt';
import User from '../../model/user';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { firstName, lastName, email, password } = req.body;
    if (firstName && lastName && email && password) {
        try {
          // Hash password to store it in DB
          //var passwordhash = await bcrypt.sign(password);
          var user = new User({
            firstName,
            lastName,
            email,
            password
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
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);