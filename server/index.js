const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const port = process.env.PORT || 3005;
const apiController = require("./controllers/api-controller");

const app = express();

app.use(cors());
app.use(json());

// use the build file
// app.use(express.static(`${__dirname}/../build`));

// API endpoints
app.get("/api/all", apiController.getAll);

app.get("/api/test", (req, res) => {
  res.status(200).status("testing")
})

app.listen(port, () => {
  console.log(`I'll be right by your side till ${port}`);
});
