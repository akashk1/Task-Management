var express = require("express");
var path = require("path");
var mongoose = require("mongoose");

var bodyparser = require("body-parser");
var cors = require("cors");
var UserRoutes = require("./backend/routes/user");
var listRoutes = require("./backend/routes/task_list");
var archiveRoutes = require("./backend/routes/archive");
var app = express();
//app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist/Task-Management")));

//Send all other requests to the Angular app
app.get("/", (req, res) => {
  console.log(req);
  res.sendFile(
    path.join(__dirname, "dist/Task-Management/index.html"),
    (err, resp) => {
      if (err) console.log("err" + err);
      console.log(resp);
    }
  );
});
const url =
  "mongodb+srv://test123:test123@cluster0.snlcs.mongodb.net/TaskManagement?retryWrites=true&w=majority";
mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", UserRoutes);
app.use("/task", listRoutes);
app.use("/archive", archiveRoutes);
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`Running in port ${port}`);
});
