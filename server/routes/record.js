const express = require("express");
const recordRoutes = express.Router();
const connectDB = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

//All records
recordRoutes.route("/record").get((req, res) => {
  let db_route = connectDB.getDb("Dream_Entries");
  db_route
    .collection("dreams")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      console.log("Found");
      res.json(result);
    });
});

//Get record by id
recordRoutes.route("/record/:id").get((req, res) => {
  let db_route = connectDB.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_route.collection("dreams").findOne(myquery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//Create and add record
recordRoutes.route("/record/add").post((req, response) => {
  let db_route = connectDB.getDb();
  let new_record = {
    date: req.body.date,
    month_name: req.body.month_name,
    month_number: req.body.month_number,
    day: req.body.day,
    sleep_quality: req.body.sleep_quality,
    sleep_length: req.body.sleep_length,
    dream: req.body.dream,
  };
  db_route.collection("dreams").insertOne(new_record, (err, res) => {
    if (err) throw err;
    console.log("Added");
    response.json(res);
  });
});

//Update record by id
recordRoutes.route("/update/:id").post((req, response) => {
  let db_route = connectDB.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let new_record = {
    date: req.body.date,
    month_name: req.body.month_name,
    month_number: req.body.month_number,
    day: req.body.day,
    sleep_quality: req.body.sleep_quality,
    sleep_length: req.body.sleep_length,
    dream: req.body.dream,
  };
  db_route.collection("dreams").replaceOne(myquery, new_record, (err, res) => {
    if (err) throw err;
    console.log("Updated");
    response.json(res);
  });
});

//Delete by id
recordRoutes.route("/delete/:id").delete((req, response) => {
  let db_route = connectDB.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_route.collection("dreams").deleteOne(myquery, (err, obj) => {
    if (err) throw err;
    console.log("Deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
