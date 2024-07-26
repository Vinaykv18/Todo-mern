
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/ToDoRoutes");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get("/",(req,res) => {
  res.send("hiii....");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));

// const express = require('express');
// const app = express();
// //require("dotenv").config();

// const port = process.env.PORT || 5000; // Change this to 3000 if needed

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
