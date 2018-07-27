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

router.get("/user", users.getDetail);
router.post("/user", users.searchUser);

module.exports = router;
