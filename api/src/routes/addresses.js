require("dotenv").config();
const { Router } = require("express");
const { Addresses, Transactions } = require("../db");
const axios = require("axios");

const router = Router();
const { YourApiKeyToken } = process.env;

router.get("/addresses", async (req, res) => {
  try {
    const { address } = req.query;

    if (address) {
      const apiUrl = await axios.get(
        `https://api.etherscan.io/api?module=account&action=balancemulti&address=${address}&tag=latest&apikey=${YourApiKeyToken}`
      );
      const apiInfo = apiUrl.data.result.map((address) => {
        return {
          account: address.account,
          balance: address.balance,
          createdInDb: false,
        };
      });

      apiInfo.forEach((address) => {
        Addresses.findOrCreate({
          where: {
            account: address.account,
            balance: address.balance,
          },
        });
      });

      return res.json(apiInfo);
    } else {
      const allAddresses = await Addresses.findAll();
      return res.json(allAddresses);
    }
  } catch (error) {
    return res.status(500).json({ error: "No valid address provided" });
  }
});

router.get("/addresses/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if(id) {
      const address = await Addresses.findOne({
        where: { id: id },
        //include: [{ model: Transactions }],
      });
      return res.json(address);
    } else {
      return res.status(500).json({ error: "No valid address provided" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/addresses/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Addresses.destroy({ where: { id: id } });
    
    return res.json({ message: "Address deleted successfully" });
    
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
