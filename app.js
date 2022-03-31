const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDataBase = require("./server/connection");
const path = require("path");
const route = require("./server/router");
const app = express();

dotenv.config({ path: "config.env" });
const port = process.env.PORT || 7777;

app.use(morgan("tiny"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

connectDataBase();

app.use("/", route); //require('./server/router'))
app.listen(port, () => {
  console.log(`Node app running on http://localhost:${port}`);
});
