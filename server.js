"use strict";

const express = require("express");
const logger = require("./logger");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
  return response.send("OK");
});

app.listen(PORT, error => {
  if (error) {
    logger.log(logger.errorLogger("Something is wrong..."));
  } else {
    logger.log(logger.infoLogger(`\nServer started on ${PORT}`));
  }
});
