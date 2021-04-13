import connectDB from "../../../middleware/mongodb";
const tf = require("@tensorflow/tfjs");
const trainingDataJson = require("../../../trainingData.json");

var lossValue;
var elapsedTime;

const handler = async (req, res) => {
  const { fever, cough, headache, soreThroat, difficultyBreathing } = req.body;

  if (req.method === "POST") {
    // console.log(testData);

    const trainingData = tf.tensor2d(
      trainingDataJson.map((item) => [
        item.fever,
        item.cough,
        item.headache,
        item.soreThroat,
        item.difficultyBreathing,
      ])
    );
    //tensor of output for training data
    const outputData = tf.tensor2d(
      trainingDataJson.map((item) => [item.chanceOfCovid])
    );
    //
    //tensor of features for testing data
    const testingData = tf.tensor2d(
      [fever, cough, headache, soreThroat, difficultyBreathing],
      [1, 5]
    );

    // build neural network using a sequential model
    const model = tf.sequential();
    //add the first layer
    model.add(
      tf.layers.dense({
        inputShape: [5], // four input neurons
        units: 5, //dimension of output space (first hidden layer)
      })
    );
    //add the hidden layer
    model.add(
      tf.layers.dense({
        inputShape: [5], //dimension of hidden layer
        units: 1, //dimension of final output
      })
    );

    //compile the model with an MSE loss function and Adam algorithm
    model.compile({
      loss: "meanSquaredError",
      optimizer: tf.train.adam(0.06),
      //optimizer: 'sgd'
    });

    console.log(model.summary());

    //train the model and predic

    async function run() {
      const startTime = Date.now();
      await model.fit(trainingData, outputData, {
        epochs: 1000,
        callbacks: {
          onEpochEnd: async (epoch, log) => {
            lossValue = log.loss;
            console.log(`epoch ${epoch}; lossValue = ${log.loss}`);
            elapsedTime = Date.now() - startTime;
            console.log("elapsed time: " + elapsedTime);
          },
        },
      });
      const results = model.predict(testingData);
      res.status(200).send(results);
      console.log("results: " + results);
    }
    run();
  }
};

export default connectDB(handler);
