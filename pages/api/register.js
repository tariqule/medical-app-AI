import connectDB from "../../middleware/mongodb";
import User from "../../model/user";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      //const { firstName, lastName, username, password, role } = req.body;
      const userExist = await User.findOne({ username: req.body.username });

      if (userExist) {
        return res.status(500).send("user already exist");
      }

      const user = new User(req.body);

      await user.save(function (err) {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send(user);
      });
    } else {
      res.status(422).send("req_method_not_supported");
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectDB(handler);
