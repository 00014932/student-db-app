const mongoose = require("mongoose");

const connectDataBase = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGOURL);

    console.log(`MongoDB database connected!`);
    console.log('Connection host: ' + con.connection.host)
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDataBase;
