const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calculationSchema = new Schema(
  {
    assismenYear: { type: String, required: true },
    categery: { type: String, required: true },
    age: { type: String, required: true },
    residentalStatus: { type: String, required: true },
    anualIncome: { type: Number, required: true },
    deduction: { type: Number, required: true },
    totalTax: { type: Number, required: true },
    taxableIncome: { type: Number, required: true },
    cess: { type: Number, required: true },
    tax: { type: Number, required: true },
    regime: { type: String, require: true },
    surcharge: { type: Number, required: true },
    taxBreakdown: [
      {
        slab: String,
        rate: Number,
        amount: Number,
      },
    ],
  },
  { timestamps: true }
);

const Calculation = mongoose.model("Calculation", calculationSchema);

module.exports = Calculation;
