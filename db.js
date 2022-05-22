const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE);
  } catch (err) {
    console.log("Error on Connecting with DB");
    process.exit();
  }
};

module.exports = connect;
