const express = require("express");
const router = express.Router();

const {
  getAllSubscribers,
  getSubscribersById,
  getSubscribedChannel,
  unwantedReq,
} = require("../controller/subscribers_controller");


router.get("/subscribers", getAllSubscribers);//THIS ROUTE SHOWS ALL THE SUBSCRIBERS LIST WITH DETAILS

router.get("/subscribers/names", getSubscribedChannel);
//THIS ROUTE PROVIDES AN ARRAY OF ALL SUBSCRIBERS WITH ONLY TWO FIELDS, THEIR NAME AND SUBSCRIBED CHANNEL.
router.get("/subscribers/:id", getSubscribersById);// THIS ROUTE PROVIDES THE DETAILS OF SUBSCRIBER WITH THE GIVEN ID.
router.use(unwantedReq);//this router HANDLES ALL THE UNWANTED REQUESTS.

module.exports = router;