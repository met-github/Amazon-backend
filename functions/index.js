/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// }
const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require("stripe")(
  "sk_test_51NSN1UKGy0FU8idpfguLgmN7LgfcJQU4p3T3UiWlsRaBlnNXtKgg0wMUSF9p5Op41lTufb4NCvvhypNFTGwbMkQM007fb3E54J"
);


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recived for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.floor(total),
    currency: "usd",
  });
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);
// app.get('/', (request, response) => response.status(200).send('hello world'));

// app.post('/payment/create', async (request, respose) => {
//   const total = request.query.total;

//   console.log('Payment Request Recieved for this amount >>> ', total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: 'usd',
//   });

//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// API key which is found from emulators:start (http://127.0.0.1:5001/back-end3/us-central1/api).

// http://127.0.0.1:5001/back-end3/us-central1/api
// http: 
exports.api = functions.https.onRequest(app);