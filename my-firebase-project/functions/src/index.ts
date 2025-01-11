/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const create_preference = onRequest((request, response) => {
  // debugger;
  const { MercadoPagoConfig, Preference } = require('mercadopago');
  const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
  const BACK_URL = process.env.BACK_URL;
  const client = new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN });
  const { items } = request.body;
  const preference = new Preference(client);
  preference.create({
    body: {
      items,
      back_urls: {
        "success": BACK_URL + "/checkout/congrats",
        "failure": BACK_URL + "/checkout/failure",
        "pending": BACK_URL + "/checkout/pending"
      },
      auto_return: "approved",
    }
  })
    .then(function (res: any) {
      response.json(res.init_point);
    }).catch(function (error: any) {
      console.error("error", error);
    });
});