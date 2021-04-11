import jwt from 'jsonwebtoken';
import config from '../../config/development';
const jwtKey = config.secretKey;
import User from '../../model/user';

export default (req, res) => {
    if (req.method === 'GET') {
        const token = req.cookies.token;
        console.log("isLoggedIn:" + token);

        if (!token) {
            return res.send({ screen: 'auth' }).end();
        }

        var payload;
        try {
            payload = jwt.verify(token, jwtKey)
        }
        catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).end();
            }

            return res.status(400).end();
        }

        var userId = User.findOne({ username: payload.username });
        res.status(200).send({ screen: payload.username });
    }
}