const express = require("express");
const router = express.Router();
const argonauteCtrl = require("../controllers/argonaute");

router.post("/argonaute", argonauteCtrl.argonaute);
router.get("/argonaute", argonauteCtrl.argonautes);

module.exports = router;
