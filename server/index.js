const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const port = 3005;
const apiController = require("./controllers/api-controller");

const app = express();

app.use(cors());
app.use(json());

// multiple endpoints not really needed
// app.get("/api/profile")
// app.get("/api/progression")
// app.get("/api/stats")
// app.get("/api/realm")
// app.get("/api/items")

app.get("/api/info", apiController.getAll);

app.listen(port, () => {
  console.log(`I'll be right by your side till ${port}`);
});
