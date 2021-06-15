const bodyParser = require('body-parser')
const express = require("express");
const app = express();

app.use(bodyParser.json());

const Port = process.env.PORT || 8000;

//routes
app.use('/tuto' , require("./routes/tuto"))

app.listen(Port, (req, res) => {
  console.log(`Server is up on Port ${Port}`);
});