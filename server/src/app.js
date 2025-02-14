require("dotenv").config();
const router = require('./router')
const express = require("express");
const cors = require('cors')
const serverConfig = require("./config/serverConfig");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/', router)

serverConfig(app);

app.listen(PORT, () => {
  console.log(`Example server started on port http://localhost:${PORT}`);
});

