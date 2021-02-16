const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db/meetup.json");
const db = low(adapter);

// set upp the db
//db.defaults({ events: [], stuff: [], newEvents: [] }).write();

module.exports = { db };
