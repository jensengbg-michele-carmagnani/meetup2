const { Router } = require("express");
const router = new Router();
const cors = require("cors");

// db
const { db } = require("../db");

router.get("/", cors(), (req, res) => {
  let events = db.get("events").value();
  console.log("events for db", events);
  res.send({ events: events });
});

module.exports = router;
