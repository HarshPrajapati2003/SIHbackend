const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require('cors');
const path = require('path');
  
const app = express();
const PORT = 5000;

app.use(cors());
// Serve the models directory statically
app.use(express.static(path.join(__dirname, 'models')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null,`uploads/`)
  // console.log(file)
  },
  filename: function (req, file, cb) {
  cb(null, `${Date.now()}-${file.originalname}`)
  }
  })
  const upload = multer({ storage: storage })

// const upload = multer({ dest: "uploads/" }); // Set the upload directory

// let model; // Declare a variable to hold your Keras model

// Load your Keras model here
// const loadModel = async () => {
//   try {
//     // Load the Keras model using tf.loadLayersModel (replace 'model.h5' with your model file)
//     model = await tf.loadLayersModel("../model4.h5");
//     console.log("Model loaded successfully.");
//   } catch (error) {
//     console.error("Error loading the model:", error);
//   }
// };

// Call the loadModel function to load the model when the server starts
// loadModel();

// Define API endpoint for predictions
app.post("/predict", upload.single("image"), async (req, res) => {
  try {
    // Get the image file from the request
    const imageFile = req.file;

    // Process the image as needed based on your model's input requirements
    // For example, resize the image and convert it to a tensor
    // const imgBuffer = await tf.node.decodeImage(imageFile.buffer);
    // const processedImage = tf.image.resizeBilinear(imgBuffer, [224, 224]); // Adjust dimensions as needed

    // Use the loaded Keras model to make predictions on the processed image
    // const predictions = model.predict(processedImage);

    // Convert the predictions to JSON
    // const predictionsJSON = predictions.arraySync();

    // Return predictions
    res.json({ predictions: "Success" });
  } catch (error) {
    console.error("Error making predictions:", error);
    res.status(500).json({ error: "Error making predictions" });
  }
});

app.get('/',()=>{
  res.send('server starting successfully')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
