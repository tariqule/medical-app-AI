import connectDB from "../../../middleware/mongodb";
import User from "../../../model/user";

// get user from db
const handler = async ({ query: { id } }, res) => {
  console.log("id", id);

  // if (req.method === 'GET') {

  await User.findOne({ username: id }, function (err, user) {
    if (err) res.status(500).send("error occured");
    else {
      console.log("user found", user);
      res.status(200).send(user);
    }
  });
  // }
  // else {
  //     res.status(422).send('req_method_not_supported');
  // }
};

export default connectDB(handler);

// api/user?user=vc

// api/user/vc

// api/user
