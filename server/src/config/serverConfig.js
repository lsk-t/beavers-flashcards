const express = require("express");

const morgan = require("morgan");

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());

  app.use(morgan("dev"));
};

module.exports = serverConfig;
