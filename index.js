const express = require("express");
const morgan = require("morgan");
const app = express();

// Standard middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Logging middleware
app.use(morgan("dev"));

// TODO: Test these routes then get rid of these routes and replace with your own
app.get("/", (req, res) => {
  res.status(200).send("Backend server is running!");
});

app.post("/test", (req, res) => {
  const testparams = req.body;

  if (Object.keys(testparams).length === 0) {
    return res
      .status(200)
      .send("This works! Test with some info in the request body though :).");
  }

  res.status(201).send(testparams);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
});
