const oauthSignature = require("./oauth-signature");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./controllers/user.controller");
const mongo = require("./mongodb");
var OAuth = require('OAuth'); //authorization module for api request
var url = require("url");
var CryptoJS = require("cryptojs");
var Player = require('player');


var songKey = '7d4vr6cgb392',
  songSecret = 'm4ntskavq56rddsa';

var url = "https://stream.svc.7digital.net/stream/catalogue";
var timeStamp = Date.now();
var trackId = "20752581";
var signature = oauthSignature.oauthSignature.generate();
// console.log(signature);
// console.log(signature.OAuthSignature("GET", url, {
//   trackId: ["20638631"],
//   shopId: ["2020"],
//   oauth_nonce: ["303809909"],
//   oauth_signature_method: ["HMAC-SHA1"],
//   oauth_timestamp: [timeStamp],
//   oauth_version: ["1.0"]
// }, songSecret, songKey).generate());


var queryString = "oauth_consumer_key=7d4vr6cgb392&oauth_nonce=273536928&oauth_signature_method=HMAC-SHA1&oauth_timestamp=" + signature.time + "&oauth_version=1.0&shopId=2020&trackId=" + trackId; 

var curlCommand = "https://stream.svc.7digital.net/stream/catalogue?oauth_consumer_key=7d4vr6cgb392&oauth_nonce=665582081&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1528048539&oauth_version=1.0&shopId=2020&trackID=20752581&oauth_signature=PpOsCSycLl%2FBuFcjW2SeuCrzVIQ%3D";

console.log(curlCommand);
var player = new Player(String(curlCommand));
player.play();
// player.play(function(err, player){
//   console.log('playend!');
// });



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

// mongo
//   .connect(process.env.MONGODB_URL)
//   .then(app.listen(1988))
//   .then(() => console.log(`Node/Express listening on 1988. Mongo running on ${process.env.MONGODB_URL}`))
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

  

// app.listen(27017);

