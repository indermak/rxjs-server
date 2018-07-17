// importing packages
const express = require('express');

const router = express.Router();

/*
 * Module dependencies.
 */

const users = require('./app/users');
// const Settings = require('./config/settings');


// Webhook Routes
// router.use('/email/webhook', verifyWebhookToken);
// End Webhook Routes

router.post("/", users.addUser);
router.get("/messages", users.getMessages);
router.get("/user", users.getDetail);
router.post("/user", users.searchUser);

module.exports = router;
