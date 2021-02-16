const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()

//use body-parser
app.use(bodyParser.json());
//  use cors
app.use(cors())

// Router 
const eventsRoute = require('./routes/events')

// Endpoint 
app.use('/events', eventsRoute)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`)
})


