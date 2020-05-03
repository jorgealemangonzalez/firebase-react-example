const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));


app.post('/', (req, res) => {
    const content = req.body.data;
    console.log(content);
    res.send({data: content})
})

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.messages = functions.region("europe-west2").https.onRequest(app);

// exports.messages = functions.region("europe-west2").https.onCall((data, context) => {
//     console.log(data, context)
//     return data
// })
