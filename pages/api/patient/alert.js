import Alert from "../../../model/alert";
import connectDB from "../../../middleware/mongodb";

const handler = async (req, res) => {
  const { alertType, alertDescription, user } = req.body;

  if (req.method === "POST") {
    try {
      const alert = new Alert({
        alertType: alertType,
        alertDescription: alertDescription,
        user: user,
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
