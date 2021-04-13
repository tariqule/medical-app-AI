import connectDB from "../../../middleware/mongodb";
import User from "../../../model/user";

// get user from db

const handler = async (req, res) => {
  if (req.method === "GET") {
    await User.find({}, function (err, users) {
      res.status(200).send(users);
    });
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);

// api/user?user=vc

// api/user/vc
