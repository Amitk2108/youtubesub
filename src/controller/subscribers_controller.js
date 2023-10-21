const subscribers = require("../models/subscribers");//Retrieve all subscribers from the schema/model
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoId");

// SHOWS ALL THE SUBSCRIBERS LIST WITH DETAILS
const getAllSubscribers = asyncHandler(async (req, res) => {
  try {
    const getAllSubscribers = await subscribers.find();
    res.status(200).json(getAllSubscribers); // Send all subscribers in JSON format with a status of 200 (OK)
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// get SUBSCRIBER byy id
const getSubscribersById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const subscribersById = await subscribers.findById(id);
      if (!subscribersById) {
        res.status(404).json({ message: "Subscriber not found" }); //Send JSON response with a status of 404 (Not Found)
        return;
      }
    res.status(200).json(subscribersById);//Send the subscriber details as the response
  } catch (error) {
     res.status(404).json({ message: "Error - Route not found" });
    throw new Error(error);
  }
});


//THIS ROUTE PROVIDES AN ARRAY OF ALL SUBSCRIBERS WITH ONLY TWO FIELDS, THEIR NAME AND SUBSCRIBED CHANNEL.
const getSubscribedChannel= asyncHandler (async(req, res, ) => {
  try {
    const subscribedChannels = await subscribers.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    ); //Retrieve subscribers with only the name and subscribedChannel fields from the schema/model
    res.status(200).json(subscribedChannels);
  } catch (err) {
    res.status(400); 
    throw new Error(error);
    // console.log(err);
  
  }
});

// HANDLES ALL THE UNWANTED REQUESTS.
const unwantedReq = asyncHandler(async(req, res) => {
  res.status(404).json({ message: "Error - Route not found" });
});


module.exports = {
  getAllSubscribers,
  getSubscribersById,
  getSubscribedChannel,
  unwantedReq,
};


