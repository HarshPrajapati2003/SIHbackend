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

app.get('/',()=>{
  res.send('server starting successfully')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
