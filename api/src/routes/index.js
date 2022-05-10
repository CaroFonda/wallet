const { Router } = require('express');

const addresses = require('./addresses.js');
const transactions = require('./transactions.js');

const router = Router();

router.use("/", addresses);
router.use("/", transactions);


module.exports = router;
