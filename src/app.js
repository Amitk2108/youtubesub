const express = require("express");// Import the Express framework
const app = express();// Create an Express application

const path = require("path");// Import the path module for working with file paths
const cors = require("cors");
const subscriberRoute = require("./routes/subscribers_route");


//PARSE INCOMING JSON DATA
app.use(express.json()); // Middleware to parse incoming JSON data
app.use(express.urlencoded({ extended: false })); // Middleware to parse incoming URL-encoded data
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html")); // Serve the index.html file as the home page
});


app.use("/",subscriberRoute);//use all routes



module.exports = app;
