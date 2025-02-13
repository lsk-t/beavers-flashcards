require("dotenv").config();

const express = require("express");

const serverConfig = require("./config/serverConfig");

const PORT = process.env.PORT || 3000;

const app = express();

serverConfig(app);

app.listen(PORT, () => {
  console.log(`Example server started on port http://localhost:${PORT}`);
});
