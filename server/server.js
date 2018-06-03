const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./controllers/user.controller");
const mongo = require("./mongodb");



// const port = process.env.PORT;

//parse cookies
app.use(cookieParser());

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//this get rid of cross origin issue
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("withCredentials", true);
  res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Cookie, x-access-token"
  );
  next();
});

app.use("/", routes);

mongo
  .connect(process.env.MONGODB_URL)
  .then(app.listen(1988))
  .then(() => console.log(`Node/Express listening on 1988. Mongo running on ${process.env.MONGODB_URL}`))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// app.listen(27017);