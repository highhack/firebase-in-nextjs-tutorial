// Import function triggers from their respective submodules:

// import { onCall } from "firebase-functions/v2/https";
// import { onDocumentWritten } from "firebase-functions/v2/firestore";

//  See a full list of supported triggers at https://firebase.google.com/docs/functions

// import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as functions from "firebase-functions";
// import functions = require("firebase-functions");


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

exports.helloWorld = functions.https.onRequest(async (request, response) => {
  try {
    response.set("Access-Control-Allow-Origin", "*");
    logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
  } catch (err) {
    return logger.error("Hello logs!", {structuredData: true});
  }
});
