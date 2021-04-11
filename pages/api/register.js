import connectDB from '../../middleware/mongodb';
import User from '../../model/user';

// const handler = async (req, res) => {
//     const saltRounds = 10;

//     if (req.method === 'POST') {
//         // Check if name, email or password is provided
//         const { firstName, lastName, username, password, role } = req.body;
//         if (firstName && lastName && username && password && role) {
//             try {
//                 const user = new User({
//                     firstName,
//                     lastName,
//                     username,
//                     password,
//                     role
//                 });
//                 // Create new user
//                 var usercreated = await user.save();
//                 console.log('user created');
//                 return res.status(200).send(usercreated);
//             } catch (error) {
//                 console.log('error occured');
//                 return res.status(500).send(error.message);
//             }
//         } else {
//             res.status(422).send('data_incomplete');
//         }
//     }
//     else {
//         res.status(422).send('req_method_not_supported');
//     }
// };

const handler = async (req, res) => {
    if (req.method === 'POST') {
        //const { firstName, lastName, username, password, role } = req.body;
        const userExist = await User.findOne({username: req.body.username});

        if(userExist){
            return res.status(500).send('user already exist')
        }
        
        const user = new User(req.body);

        await user.save(function (err) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(user);
        })
    }
    else {
        res.status(422).send('req_method_not_supported');
    }
}

export default connectDB(handler);