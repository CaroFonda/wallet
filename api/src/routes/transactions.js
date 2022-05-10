require("dotenv").config();
const { Router } = require("express");
const { Addresses, Transactions } = require("../db");
const { YourApiKeyToken } = process.env;
const axios = require("axios");

const router = Router();

router.get("/transactions", async (req, res) => {
  try {
    const { address } = req.query;

    if (address) {
      const apiUrl = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${YourApiKeyToken}`);
      const apiInfo = apiUrl.data.result.map((address) => {
        return {
          timestamp: address.timeStamp,
          value: address.value,
          addressee: address.to,
          sender: address.from,
          createdInDb: false
        };
      });

      apiInfo.forEach((address) => {
        Transactions.findOrCreate({
          where: {
            timestamp: address.timestamp,
            value: address.value,
            addressee: address.addressee,
            sender: address.sender
          },
        });
      });

      return res.json(apiInfo);
      
    } else {
      const allTransactions = await Transactions.findAll();
      return res.json(allTransactions);
    }
  } catch (error) {
    return res.json({
      error: "No valid address provided",
    });
  }
});

module.exports = router;
