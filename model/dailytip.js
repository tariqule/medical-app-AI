import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dailytip = new Schema({
  tipName: {
    type: String,
  },
  tipDescription: {
    type: String,
  },
});

mongoose.models = {};

const DailyTip = mongoose.model("DailyTip", dailytip);

export default DailyTip;
