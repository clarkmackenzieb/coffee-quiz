const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const port = 3005;
const apiController = require("./controllers/api-controller");

const app = express();

app.use(cors());
app.use(json());

// API endpoints
app.get("/api/profile", apiController.getProfile);
app.get("/api/progression", apiController.getProgression);
app.get("/api/stats", apiController.getStats);
app.get("/api/realm", apiController.getRealmStatus);
app.get("/api/items", apiController.getItems);
app.get("/api/feed", apiController.getFeed);

app.listen(port, () => {
  console.log(`I'll be right by your side till ${port}`);
});
