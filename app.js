var createError = require("http-errors");
var express = require("express");
const app = express();
const mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());
app.use(require("./routes/test"));
const port = process.env.PORT || 5000;

// app.get("/about", (req, res) => {
//   console.log("hello my about");
//   res.send("hello about world from the server");
// })

if (process.env.NODE_ENV == "production") {
  app.use(express.static("react_client/build"));
}

app.listen(port, function () {
  console.log(`port listening on ${port}`);
});

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(logger("dev"));
// app.use(cors());

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
