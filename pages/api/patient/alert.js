import Alert from "../../../model/alert";
import connectDB from "../../../middleware/mongodb";
import User from "../../../model/user";
import mongoose from "mongoose";
const handler = async (req, res) => {
  const { alertType, alertDescription, user } = req.body;
  var objId;
  if (req.method === "POST") {
    try {
      await User.findOne({ username: user }, function (err, user) {
        if (err) res.status(500).send("error occured A");
        else {
          objId = user._id;
          // _user = user;
          console.log("user found", user);

          // res.status(200).send(user);
        }
      });

      const alert = new Alert({
        alertType: alertType,
        alertDescription: alertDescription,
        user: mongoose.Types.ObjectId(objId),
      });
      const alertCreated = await alert.save();
      console.log("tip created", alertCreated);
      return res.status(200).send(alertCreated);
    } catch (error) {
      console.log("error occured");
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
