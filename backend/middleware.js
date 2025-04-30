const TaxSchema = require("./Schema");

// Middleware to validate the request body
const ValidateTax = (req, res, next) => {
  const { error } = TaxSchema.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports.ValidateTax = ValidateTax;
