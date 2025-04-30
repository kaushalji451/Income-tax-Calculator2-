const express = require("express");
const router = express.Router();
const { ValidateTax } = require("../middleware");
const calculateTax = require("../calculation/taxcalculation");
const Calculation = require("../models/Calculation");

// Route to fetch result from body 
// And save in database after calculate Tax
// And return the calculations to frontend
router.post("/", ValidateTax, async (req, res) => {
  let body = req.body;
  let data = calculateTax(body);
  try {
    const Tax = new Calculation({
      assismenYear: body.year,
      categery: body.categery,
      age: body.age,
      residentalStatus: body.resStatus,
      anualIncome: body.income,
      deduction: data.deduction,
      totalTax: data.totalTax,
      taxableIncome: data.taxableincome,
      cess: data.cess,
      tax: data.tax,
      regime: body.regime,
      surcharge: data.surcharge,
      taxBreakdown: data.taxBreakdown,
    });
      let result = await Tax.save();
      res.status(200).json(result);
  } catch (error) {
        res.status(500).json({message : "some error occured"});
  }
});

// Fetch the all tax calcualtion history from database 
// And sent to frontend
router.get("/", async (req, res) => {
  try {
    let data = await Calculation.find({});
  if (data) {
    res.json(data);
  } else {
    res.status(401).json("no values find");
  }
  } catch (error) {
   res.status(501).json({message : "some error in fetch"});
  }
});
module.exports = router;
