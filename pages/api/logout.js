import { serialize } from 'cookie';

export default (req, res) => {
    /* remove cookies from request header */
    if (req.method === 'GET') {
        res.setHeader('Set-Cookie', [
            serialize('token', '', {
                maxAge: -1,
                path: '/',
            })
        ]);

        res.status(302).send('logged out');
    }
    else {
        res.status(422).send('req_method_not_supported');
    }
}