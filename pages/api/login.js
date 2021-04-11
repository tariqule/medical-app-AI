import connectDB from '../../middleware/mongodb';
import User from '../../model/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config/development';
import { serialize } from 'cookie';
const jwtKey = config.secretKey;
const jwtExpirySeconds = 300;

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log('unable to find user');
        res.status(500).send(err);
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          // Create a new token with the user id in the payload
          // and which expires 300 seconds after issue
          const token = jwt.sign({ id: user._id, username: user.email }, jwtKey,
            { algorithm: 'HS256', expiresIn: jwtExpirySeconds });
          // set the cookie as the token string, with a similar max age as the token
          // here, the max age is in milliseconds
          // res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000, httpOnly: true });
          res.setHeader('Set-Cookie', serialize('token', token, { maxAge: jwtExpirySeconds * 1000, httpOnly: true }));
          res.status(200).send({ screen: user.username, _id: user._id, token: token });
          console.log('logged in');
          req.user = user;
          //call the next middleware
          // next();
        } else {
          res.json({
            status: "error", message: "Invalid username/password.",
            data: null
          });
        }
      }
    });
  } else {
    res.status(422).send('req_method_not_supported');
  }
}

export default connectDB(handler);