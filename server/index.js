const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const port = 3005;

const app = express();
app.use(cors());
app.use(json());

app.listen(port, () => {
  console.log(`I'll be right by your side till ${port}`);
});
