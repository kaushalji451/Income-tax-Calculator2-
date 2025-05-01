const express = require("express");
const router = express.Router();
const AdvanceTax = require("../calculation/AdavnceTaxCalculation");
const Calculation = require("../models/Calculation");


router.post("/", async(req, res) => {
  const taxData = req.body;
  const data = AdvanceTax(taxData);
  try {
    const Tax = new Calculation({
      assismenYear: taxData.year,
      categery: taxData.categery,
      age: taxData.age,
      residentalStatus: taxData.resStatus,
      anualIncome:data.grossIncome,
      deduction: data.deduction,
      totalTax: data.totalTax,
      taxableIncome: data.taxableIncome,
      cess: data.cess,
      tax: data.tax,
      regime: taxData.regime,
      surcharge: data.surcharge,
      taxBreakdown: data.taxBreakdown,
    });
      let result = await Tax.save();
      res.status(200).json(result);
  } catch (error) {
    console.log(error);
        res.status(500).json({message : "some error occured"});
  }
});


module.exports = router;
