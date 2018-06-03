// const request = require('request');
// const OAuth   = require('oauth-1.0a');
// const crypto  = require('crypto');

// // Initialize
// const oauth = OAuth({
//   consumer: {
//     key: '7d4vr6cgb392',
//     secret: 'm4ntskavq56rddsa'
//   },
//   signature_method: 'HMAC-SHA1',
//   hash_function(base_string, key) {
//     return crypto.createHmac('sha1', key).update(base_string).digest('base64');
//   }
// });

// const request_data = {
//   url: 'https://api.twitter.com/1/statuses/update.json?include_entities=true',
//   method: 'POST',
//   data: { status: 'Hello Ladies + Gentlemen, a signed OAuth request!' }
// };

// // Note: The token is optional for some requests
// const token = {
//   key: '370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb',
//   secret: 'LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE'
// };

// request({
//   url: request_data.url,
//   method: request_data.method,
//   form: oauth.authorize(request_data, token)
// }, function(error, response, body) {
//   // Process your data here
// });