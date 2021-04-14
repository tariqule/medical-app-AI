import connectDB from "../../../middleware/mongodb";
import Alert from "../../../model/alert";

// get all daily tips posted by nurses
const handler = async (req, res) => {
  if (req.method === "GET") {
    await Alert.find({}, function (err, alerts) {
      res.status(200).send(alerts);
    });
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
