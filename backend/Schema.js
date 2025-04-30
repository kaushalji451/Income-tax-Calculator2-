const Joi = require("joi");

// Joi schema to validate tax calculation input
const TaxSchema = Joi.object({
  year : Joi.string().required(),
  categery : Joi.string().required(),
  age : Joi.string().required(),
  resStatus : Joi.string().required(),
  income : Joi.number().required(),
  regime : Joi.string().required(),
}).required();

module.exports = TaxSchema;

