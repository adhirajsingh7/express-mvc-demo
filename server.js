// dotenv is used to access environment variables(secret information)
require("dotenv").config();
const express = require("express");
const db_connection = require("./config/db_connection");
const app = express();

const APP_PORT = process.env.APP_PORT || 8080;

// Express.json() expects request data to be sent in JSON format, which often resembles a simple JS object:
// example: {"Name": "Pikachu", "Type": "Banana", "Number In Stable": 12}
app.use(express.json({ limit: "50mb", extended: true }));
// Express.urlencoded() expects request data to be sent encoded in the URL, usually in strings or arrays:
// .../Name=Pikachu&Type=Banana&Number+In+Stable=12
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// DB connection
db_connection();

// Routes (setting url paths)
app.use("/", require("./routes"));

// starting server
app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
