const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const login = require("./routes/userModule");
const category = require("./routes/categoryModule");
const expense = require("./routes/expenseModule");

const dbConnect = require("./db");

//  configure dotenv variable
dotenv.config();

// connect database
dbConnect();

// default middleware and cors handling
app.use(express.json());
app.use(cors());

app.use("/", (req, res, next) => {
  //   res.status(200).send({ message: "App is working Good" });
  //   next("App is working Good");
  console.log("passed middleware");
  next();
});

app.use("/user", login);
app.use("/category", category);
app.use("/expense", expense);

// common error handling
// app.use((err, req, res, next) => {
//   res.status(404).send("Error is " + err);
// });

// server starting message
app.listen(process.env.PORT || 3001, () => {
  console.log("Server Started Successfully");
});
