const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const taskmodel = require("./models/catmodel.js");

const routes = require("./routes/ToDoRoutes.js");

dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to mongodb..."))
  .catch((err) => console.log(err));
  
app.use(routes);

//async function insertData(data) {
 //await taskmodel.insertMany(data)}
//const textList = [{text:'school work'}, {text:'home work' }];
//insertData(textList);

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
