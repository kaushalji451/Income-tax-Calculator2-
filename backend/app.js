const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mainRoutes = require("./routes/TaxRoute");
const AdvanceTax = require("./routes/AdvanceTax");
const app = express();
const port = 8080;
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MongoDB_URl = process.env.MONGO_URI;

// Connect to MongoDB database
const main = async () => {
  await mongoose
    .connect(MongoDB_URl)
    .then(console.log("connect to db"));
};
main();

// Calculate Tax route
app.use("/calculate-tax", mainRoutes);
// Tax History route
app.use("/calculations", mainRoutes);

app.use("/adv_tax", AdvanceTax);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
